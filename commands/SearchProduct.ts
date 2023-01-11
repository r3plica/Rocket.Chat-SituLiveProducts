import {
    IRead,
    IModify,
    IHttp,
    IPersistence,
    IHttpResponse,
    ILogger,
    IMessageExtender,
} from "@rocket.chat/apps-engine/definition/accessors";
import { IMessage } from "@rocket.chat/apps-engine/definition/messages";
import {
    ISlashCommand,
    ISlashCommandPreview,
    ISlashCommandPreviewItem,
    SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import {
    BlockElementType,
    ButtonStyle,
} from "@rocket.chat/apps-engine/definition/uikit";
import { IUIKitContextualBarViewParam } from "@rocket.chat/apps-engine/definition/uikit/UIKitInteractionResponder";
import { IUser } from "@rocket.chat/apps-engine/definition/users";
import { ProductAttachment } from "../lib/ProductAttachment";

export class SearchProductsCommand implements ISlashCommand {
    public command = "products";
    public i18nParamsExample = "";
    public i18nDescription = "";
    public providesPreview = false;

    private readonly logger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> {
        this.attachProductCard(context, modify);
    }

    // TODO: Adds blocks to the chat
    private async attachProductCard(
        context: SlashCommandContext,
        modify: IModify
    ): Promise<void> {
        const creator = modify.getCreator();
        const messageStructure = creator.startMessage();
        const blockBuilder = creator.getBlockBuilder();

        blockBuilder.addImageBlock({
            imageUrl:
                "https://res.cloudinary.com/situ-live/image/upload/c_fit,h_452,w_821/v1/categories/desktop-pcs/products/SL00000000760/lenovo_Legion-Tower-5i-Intel-i5-Processor_SL00000000760_w1rjyq",
            altText: "test",
        });

        blockBuilder.addActionsBlock({
            blockId: "what-now",
            appId: "appId",
            elements: [
                blockBuilder.newButtonElement({
                    actionId: "priceLink",
                    text: blockBuilder.newPlainTextObject("Price"),
                    value: "something",
                    style: ButtonStyle.PRIMARY,
                }),
                blockBuilder.newButtonElement({
                    actionId: "priceLink",
                    text: blockBuilder.newPlainTextObject("Shop now"),
                    value: "something",
                    style: ButtonStyle.PRIMARY,
                }),
            ],
        });

        messageStructure.setBlocks(blockBuilder);

        // // TODO: This only notifies the agent
        // await modify.getNotifier().notifyUser(sender, messageStructure.getMessage());
        await creator.finish(messageStructure);
    }

    // TODO: Attaches an image to the chat
    private async attachProduct(
        context: SlashCommandContext,
        modify: IModify
    ): Promise<void> {
        const messageId = await this.sendMessage(
            context,
            modify,
            "Sending a message!"
        );
        const messageExtender = await this.getMessageExtender(
            context,
            modify,
            messageId
        );
        const value = 1;
        const img = new ProductAttachment(
            "https://open.rocket.chat/images/logo/logo.svg",
            "test",
            "https://some.link.come"
        );

        messageExtender.addCustomField("key", value);
        messageExtender.addAttachment(img);

        await modify.getExtender().finish(messageExtender);
    }

    // TODO: Opens the contextual bar
    private async openContextualBar(
        context: SlashCommandContext,
        modify: IModify
    ): Promise<void> {
        const triggerId = context.getTriggerId() as string; // [1]
        const user = context.getSender();

        const contextualbarBlocks = createContextualBarBlocks(modify); // [2]

        await modify
            .getUiController()
            .openContextualBarView(contextualbarBlocks, { triggerId }, user);
    }

    private async sendMessage(
        context: SlashCommandContext,
        modify: IModify,
        message: string
    ): Promise<string> {
        const messageStructure = modify.getCreator().startMessage();
        const sender = context.getSender();
        const room = context.getRoom();

        messageStructure.setSender(sender).setRoom(room).setText(message);

        return await modify.getCreator().finish(messageStructure); // [1]
    }

    private async getMessageExtender(
        context: SlashCommandContext,
        modify: IModify,
        messageId: string
    ): Promise<IMessageExtender> {
        const sender = context.getSender();
        return modify.getExtender().extendMessage(messageId, sender); // [1]
    }
}

export function createContextualBarBlocks(
    modify: IModify,
    viewId?: string
): IUIKitContextualBarViewParam {
    const blocks = modify.getCreator().getBlockBuilder();

    const date = new Date().toISOString();

    blocks.addSectionBlock({
        text: blocks.newMarkdownTextObject(`The current date-time is\n${date}`), // [4]
        accessory: {
            // [5]
            type: BlockElementType.BUTTON,
            actionId: "date",
            text: blocks.newPlainTextObject("Refresh"),
            value: date,
        },
    });

    blocks.addImageBlock({
        imageUrl: "https://picsum.photos/200/300",
        altText: "test",
    });

    return {
        // [6]
        id: viewId || "contextualbarId",
        title: blocks.newPlainTextObject("Search"),
        submit: blocks.newButtonElement({
            text: blocks.newPlainTextObject("Submit"),
        }),
        blocks: blocks.getBlocks(),
    };
}
