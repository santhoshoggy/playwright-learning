import { test, Page, Locator, expect } from '@playwright/test'


export class fileupload {
    readonly text_input: Locator
    readonly file_upload_btn: Locator
    readonly file_path: any
    readonly send_btn: Locator
    readonly refersh_btn: Locator
    private readonly page: Page


    constructor(private Page: Page) {
        this.page = Page;
        this.text_input = Page.locator('.message-textarea');
        this.file_path = "test-data/Automation Testing.pdf"
        this.file_upload_btn = Page.locator('input[type="file"]');
        this.send_btn = Page.locator('.send-btn');
        this.refersh_btn = this.page.getByRole('button', {name:'Refresh Chat'});
    }


    async upload_file(filename: string) {
        await this.file_upload_btn.setInputFiles(this.file_path);
        await this.send_btnclick("send_btn");
        await expect(this.page.getByText('Automation Testing.pdf').last()).toBeVisible();
        setTimeout:10000;

    }
    async send_btnclick(send_btn: string) {
        await this.send_btn.click();
        await this.page.waitForTimeout(5000);
    }
    async refersh(refersh_btn: string) {
        await this.refersh_btn.click();
    }
       async verifySendButtonDisabled(){
         await expect(this.text_input).toBeEmpty();
         await expect(this.send_btn).toBeDisabled();
    }

    async tab_char(){
        await this.text_input.press('Enter');
       for(let i=0;i<=5;i++){
        await this.text_input.press('Tab');
       }
       await this.page.waitForTimeout(3000);
    }
    async unsupport(){
        await this.file_upload_btn.setInputFiles("test-data/unsupportfile.exe");
        await this.send_btnclick("send_btn");
        await this.page.waitForTimeout(4000);
    }

    async zero_byte(){
        await this.file_upload_btn.setInputFiles("test-data/emptyfile.pdf");
        await this.send_btnclick("send_btn");
        await this.page.waitForTimeout(4000);
    }
}