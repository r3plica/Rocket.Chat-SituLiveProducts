import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import { IAppInfo } from "@rocket.chat/apps-engine/definition/metadata";
import {
    ISectionBlock,
    IUIKitResponse,
    UIKitBlockInteractionContext,
    UIKitViewSubmitInteractionContext,
} from "@rocket.chat/apps-engine/definition/uikit";
import {
    createContextualBarBlocks,
    SearchProductsCommand,
} from "./commands/SearchProduct";
import { TestCommand } from "./lib/TestCommand";

export class SituLiveProductsApp extends App {
    private readonly appLogger: ILogger;

    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
        this.appLogger = this.getLogger();
        this.appLogger.debug("Starting the product search app");
    }

    protected async extendConfiguration(
        configuration: IConfigurationExtend,
        environmentRead: IEnvironmentRead
    ): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(
            new SearchProductsCommand(this.appLogger)
        );
        await configuration.slashCommands.provideSlashCommand(
            new TestCommand()
        );
    }

    public async executeBlockActionHandler(
        context: UIKitBlockInteractionContext,
        _read: IRead,
        _http: IHttp,
        _persistence: IPersistence,
        modify: IModify
    ) {
        const data = context.getInteractionData();

        const contextualbarBlocks = createContextualBarBlocks(
            modify,
            data.container.id
        );

        // [9]
        await modify
            .getUiController()
            .updateContextualBarView(
                contextualbarBlocks,
                { triggerId: data.triggerId },
                data.user
            );

        return {
            success: true,
        };
    }

    // [10]
    public async executeViewSubmitHandler(
        context: UIKitViewSubmitInteractionContext
    ): Promise<IUIKitResponse> {
        const data = context.getInteractionData();

        // [11]
        const text = (data.view.blocks[0] as ISectionBlock).text.text;

        // [12]
        console.log(text);

        return {
            success: true,
        };
    }
}
