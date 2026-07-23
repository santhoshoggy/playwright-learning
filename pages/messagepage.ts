import { test, expect, Page, Locator } from '@playwright/test'
import testdata from '../test-data/test_data.json'


export class Message {
    private readonly page: Page
    readonly personal_device: Locator
    readonly client_device: Locator
    readonly text_input: Locator
    readonly timestamp_locator: Locator
    readonly copy_text: Locator




    constructor( private Page: Page) {


        this.page = Page;
        this.personal_device = Page.getByRole('button',{name:"Personal Device"});
        this.client_device = Page.getByRole('button',{name:"Client Laptop"});
        this.text_input = Page.locator('.message-textarea');
        this.timestamp_locator = Page.locator('//*[@id="root"]/div/div/main/div[1]/div/div[1]/div[3]/span');
        // this.copy_text = Page.getByRole('button',{name:"Copy"});
        this.copy_text = Page.locator('//*[@id="root"]/div/div/main/div[1]/div/div[1]/div[3]/button')
    }

    async Press_enter(text_input: string) {
        await this.page.locator(text_input).press('Enter');
    }


    async switch_personal(person_device: string) {
        await this.personal_device.click();
         await expect(this.page.getByRole('button', { name: 'Personal Device' })).toBeVisible()
    }
    async switch_client(client_device: string) {
        await this.client_device.click();
        await expect(this.page.getByRole('button', { name:'Client Laptop' })).toBeVisible()
        // await this.page.waitForTimeout(3000);
    }
    async send_text(text_input: string) {
        await this.text_input.pressSequentially(testdata.message.mseeage1);
        await this.text_input.press('Enter');
        await this.page.waitForTimeout(3000);
    }
    async long_text(text_input: string) {
        await this.text_input.pressSequentially(testdata.message['long-message']);
        await this.text_input.press('Enter');
        await this.page.waitForTimeout(3000);
    }
    async special_char(text_input: string) {
        await this.text_input.pressSequentially(testdata.message.special_characters);
        await this.text_input.press('Enter');
        await this.page.waitForTimeout(3000);
    }
    async verify(send_text: string) {
        await expect(this.page.getByText(testdata.message.mseeage1).last()).toBeVisible()
    }
    async timestamp(timestamp_locator: string) {
        await expect(this.timestamp_locator).toBeVisible();
    }
    async input_empty(text_input: string) {
        await expect(this.text_input).toBeEmpty();
    }
    async copytext(copy_text: string) {
        await this.copy_text.last();
        await this.copy_text.click();
        await expect(this.page.getByText("copied"));
    }
    async repeat_text(){
        const longtext = "hello".repeat(1000);
        this.page.setDefaultTimeout(100000);
        await this.text_input.fill(longtext);
        await this.text_input.press('Enter');
        await this.page.waitForTimeout(3000);

    }
    async clear_sky_chat(){
       await this.input_empty("");
       await this.text_input.press('Enter');
       await expect(this.text_input).toBeEmpty();

    }

}