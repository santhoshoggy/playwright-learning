import { test, Locator, Page, expect } from '@playwright/test'
import testdata from '../test-data/test_data.json';
import { Message } from './messagepage';


export class mainpage {

    readonly active_status: Locator
    readonly clear_chat: Locator
    readonly lightmode: Locator
    readonly darkmode: Locator
    readonly footer_locat : Locator
    private readonly page : Page
    Message : Message
    // readonly active_status: Locator
    // readonly clear_chat: Locator
    // readonly lightmode: Locator
    // readonly darkmode: Locator
    // readonly footer_locat : Locator
    // private readonly page : Page
    // Message : Message

    constructor( private Page: Page) {
        this.page = Page;
        this.Message = new Message(Page);
       
        
        this.active_status = Page.locator('.status-dot')
        this.clear_chat = this.page.getByRole('button',{name:'Clear All Chats'});   
        this.lightmode = this.page.getByRole('button',{name:'Light Mode'})
        this.darkmode = this.page.getByRole('button',{name:'dark Mode'})
        this.footer_locat = this.page.locator('//*[@id="root"]/div/div/aside/footer/div/span')
    }

    async baseurl() {
        await this.page.goto(testdata.BASE_URL);
    }
    async active_status_check(active_status: string) {
        await this.active_status.getByText("Live Link Active");
    }

    async clearchat() {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe("Are you sure you want to clear ALL messages and files?");
            await dialog.accept();
        });
        await this.clear_chat.click();
        await this.page.waitForTimeout(3000);
        
    }
      async clearchat_cancel() {
        
        this.page.on('dialog', async dialog2 => {
            expect(dialog2.message()).toBe("Are you sure you want to clear ALL messages and files?");
            await this.page.waitForTimeout(3000);
            await dialog2.dismiss();
        });
        await this.clear_chat.click();
        
    }

    async light_mode(lightmode: string) {
        await this.lightmode.click();
        await this.page.waitForTimeout(3000);
    }
    async dark_mode(darkmode: string) {
        await this.darkmode.click();
        await this.page.waitForTimeout(3000);
    }
    async footer(){
        await this.footer_locat.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(5000);
        await expect(this.footer_locat).toHaveText("v2.0 Protected");
        await expect(this.footer_locat).toBeVisible();
    }
    async cancel_clear(){
        await this.Message.send_text("");
        await this.clearchat_cancel();
        
    }
   async resize (){
        await this.page.setViewportSize({
        width: 1024,
        height: 768
    });
    await this.page.waitForTimeout(3000);

   }

    
 
    




}