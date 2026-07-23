import {test,Page,Locator, expect} from '@playwright/test'

export class sidebar{
   
    readonly Page: Page;
    readonly messagerTitle: Locator;
    readonly workspacesHeading: Locator;
    readonly clientLaptop: Locator;
    readonly personalDevice: Locator;
    readonly toolsHeading: Locator;
    readonly refreshChat: Locator;
    readonly clearAllChats: Locator;
    readonly lightMode: Locator;
    readonly versionLabel: Locator;
   

    constructor(page:Page){
        this.Page = page;

        this.messagerTitle = page.getByText('Messager');
        this.workspacesHeading = page.getByText('Workspaces');
        this.clientLaptop = page.getByRole('button', { name: 'Client Laptop' });
        this.personalDevice = page.getByRole('button', { name: 'Personal Device' });
        this.toolsHeading = page.getByText('Tools');
        this.refreshChat = page.getByRole('button', { name: 'Refresh Chat' });
        this.clearAllChats = page.getByRole('button', { name: 'Clear All Chats' });
        this.lightMode = page.getByRole('button', { name: /Light Mode|Dark Mode/ });
        this.versionLabel = page.getByText('v2.0 Protected');
    }

      async verifySidebar() {
        await expect(this.messagerTitle).toBeVisible();
        await expect(this.workspacesHeading).toBeVisible();
        await expect(this.clientLaptop).toBeVisible();
        await expect(this.personalDevice).toBeVisible();
        await expect(this.toolsHeading).toBeVisible();
        await expect(this.refreshChat).toBeVisible();
        await expect(this.clearAllChats).toBeVisible();
        await expect(this.lightMode).toBeVisible();
        await expect(this.versionLabel).toBeVisible();
    }
       
}