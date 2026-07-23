import {test as Test} from '@playwright/test';
import { mainpage } from '../pages/mainpage';
import { Message } from '../pages/messagepage';
import { fileupload } from '../pages/fileupload';
import { sidebar } from '../pages/sidebar';


export type myfixtures = {

    baseurl : mainpage
    active_status : mainpage
    switch_person : Message
    switch_client : Message
    sent_text : Message
    timestamp : Message
    input_empty : Message
    copytext : Message
    fileupload : fileupload
    refersh : fileupload
    clearchat : mainpage
    lightmode : mainpage
    darkmode : mainpage
   sidebarvirify :sidebar
   footer : mainpage
   verifySendButtonDisabled :fileupload
   send_btn : fileupload
   tab:fileupload
   unsupport : fileupload
   emptyfile : fileupload
   repeat_text :Message
  clear_sky_chat :Message
  clearchat_cancel : mainpage
  resize : mainpage

}

export const test  = Test.extend <myfixtures>({
    baseurl: async ({ page }, use) => {
    // const action = new mainpage(page);
    // await action.baseurl();
    // await use(action);
    await use (new mainpage(page));
  },
  active_status :async({page},use)=>{
    await use( new mainpage(page));
  },
  switch_person :async({page},use)=>{
    await use(new Message(page));
  },
  switch_client:async({page},use)=>{
    await use(new Message(page));
  },
  sent_text : async({page},use)=>{
    await use(new Message(page));
  },
  timestamp : async({page},use)=>{
    await use(new Message(page));
  }
  ,
  input_empty :async({page},use)=>{
    await use(new Message(page));
  },
  copytext :async({page},use)=>{
    await use(new Message(page));
  },
  fileupload :async({page},use)=>{
    await use(new fileupload(page));
  },
  refersh :async({page},use)=>{
    await use(new fileupload(page));
  },
  clearchat :async({page},use)=>{
    await use(new mainpage(page));
  },
  lightmode:async({page},use)=>{
    await use(new mainpage(page));
  },
  darkmode:async({page},use)=>{
    await use(new mainpage(page));
  },
  sidebarvirify :async({page},use)=>{
    await use(new sidebar(page));
  },
  footer :async({page},use)=>{
    await use(new mainpage(page));
  },
  send_btn:async({page},use)=>{
    await use(new fileupload(page));
  },
  verifySendButtonDisabled:async({page},use)=>{
    await use(new fileupload(page));
  },
  tab:async({page},use)=>{
    await use(new fileupload(page));
  },
  unsupport:async({page},use)=>{
    await use(new fileupload(page));
  },
  emptyfile:async({page},use)=>{
    await use(new fileupload(page));
  },
  repeat_text:async({page},use)=>{
    await use(new Message(page));
  },
  clear_sky_chat:async({page},use)=>{
    await use(new Message(page));
  },
  clearchat_cancel:async({page},use)=>{
    await use(new mainpage(page));
  },
  resize:async({page},use)=>{
    await use(new mainpage(page));
  }





});
export {expect} from '@playwright/test'