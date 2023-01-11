import { IMessageAttachment, IMessageAttachmentTitle } from "@rocket.chat/apps-engine/definition/messages";

export class ProductAttachment implements IMessageAttachment {
    imageUrl?: string;
    title: IMessageAttachmentTitle;

    public constructor(imageUrl: string, title: string, url: string) {
        this.imageUrl = imageUrl;
        this.title = {
            value: title,
            link: url
        }
    }
}