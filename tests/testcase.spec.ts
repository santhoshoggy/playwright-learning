
import { myfixtures, test } from "../fixture/fixture";
import { fileupload } from "../pages/fileupload";

//24,27

test.beforeEach(async ({ baseurl }) => {
    await baseurl.baseurl();
})

test('TC-01 url', async ({ active_status }) => {
    await active_status.active_status_check('Online');

});

test('TC-02 switch-person-devise', async ({ switch_person }) => {
    await switch_person.switch_personal("personal_device");
    await switch_person.switch_client("client_device");
});
test('TC-03 send-text', async ({ sent_text }) => {
    await sent_text.send_text("send small text");
    await sent_text.long_text("send-long-text");
    await sent_text.special_char("specia-char");
    await sent_text.verify("");
});
test('TC-04 Verify message displays workspace label', async ({ switch_person, switch_client, sent_text, timestamp, copytext }) => {

    await switch_person.switch_personal("personal_device");
    await sent_text.send_text("send-small-text");
    await switch_person.switch_client("client_device");
    await sent_text.long_text("long-text");
    await copytext.copytext("");
    await timestamp.timestamp("timestamp"); //timestamp visible here ..
});

test('05 clear-after sending', async ({ sent_text, input_empty }) => {
    await sent_text.send_text("send text");
    await input_empty.input_empty("check to empty"); //check input area to be empty
});
test('05 copy-text sending', async ({ sent_text, copytext }) => {
    await sent_text.send_text("send text");
    await copytext.copytext("");
});

test('TC-06 file upload', async ({ fileupload, refersh, clearchat }) => {
    await fileupload.upload_file("");
    await refersh.refersh("refersh the chat..") //click the refersh chat button
    await clearchat.clearchat();
});

test('TC-07 swit-modes', async ({ lightmode, darkmode }) => {
    await lightmode.light_mode("light mode");
    await darkmode.dark_mode("dark mode");
});
test('TC-08 Verify sidebar sections are visible', async ({ sidebarvirify }) => {
    await sidebarvirify.verifySidebar();
});
test('TC-09 Verify empty state message on fresh load',async({footer})=>{
    await footer.footer();
});
test ('TC-10 Send button disabled on empty input',async({verifySendButtonDisabled})=>{
   await verifySendButtonDisabled.verifySendButtonDisabled();
});
test('TC-11 Send message with only spaces (tab characters)',async({tab,verifySendButtonDisabled})=>{
    await tab.tab_char();
    await verifySendButtonDisabled.verifySendButtonDisabled();
    
});
test('TC-12 Upload unsupported file type',async({unsupport})=>{
  await unsupport.unsupport();
});

test('TC-13 Upload zero-byte file',async({emptyfile})=>{
  await emptyfile.zero_byte();
});
test('TC-14 Paste extremely long text (>10,000 characters)',async({repeat_text})=>{
  await repeat_text.repeat_text();
});

test('TC-15 Clear All Chats when chat is already empty ' ,async({clear_sky_chat})=>{
    await clear_sky_chat.clear_sky_chat();
});
test('TC-16 Clear All Chats when chat is already empty ' ,async({clearchat_cancel,sent_text,resize})=>{
    await resize.resize();
    await sent_text.send_text("");
    await sent_text.long_text("");
    await sent_text.repeat_text();
    await clearchat_cancel.clearchat_cancel();
});
test('TC-17 clear-chat ' ,async({clear_sky_chat,clearchat,sent_text})=>{
    await clearchat.clearchat()
    await clear_sky_chat.clear_sky_chat();
    await sent_text.send_text("");
});





