import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import {
    ISlashCommand,
    SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";

export class TestCommand implements ISlashCommand {
    public command = "testing";
    public i18nParamsExample = "";
    public i18nDescription = "";
    public providesPreview = false;

    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> {
        this.sendMessage(context, modify, "this is a test");
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
}
