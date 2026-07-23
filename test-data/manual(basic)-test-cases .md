# Manual Test Cases — TempSharem Messager
**URL:** https://tempsharem.netlify.app/  
**Application:** Messager v2.0  
**Explored via:** Playwright MCP  
**Date:** 2026-04-23  

---

## Application Overview

TempSharem Messager is a secure, encrypted messaging workspace with:
- Two workspaces: **Client Laptop** and **Personal Device**
- Messaging with file attachment support
- Tools: Refresh Chat, Clear All Chats, Light/Dark Mode toggle
- Persistent chat across page loads

---

## Test Case Summary

| TC ID | Module | Test Case Title | Type |
|-------|--------|-----------------|------|
| TC_01 | Page Load | Verify successful page load | Positive |
| TC_02 | Page Load | Verify Live Link Active status indicator | Positive |
| TC_03 | Workspace | Switch to Personal Device workspace | Positive |
| TC_04 | Workspace | Switch to Client Laptop workspace | Positive |
| TC_05 | Workspace | Verify active workspace is highlighted | Positive |
| TC_06 | Messaging | Send a text message | Positive |
| TC_07 | Messaging | Send message using Enter key | Positive |
| TC_08 | Messaging | Send a long text message | Positive |
| TC_09 | Messaging | Send special characters in message | Positive |
| TC_10 | Messaging | Verify message displays workspace label | Positive |
| TC_11 | Messaging | Verify message timestamp is shown | Positive |
| TC_12 | Messaging | Verify input clears after sending | Positive |
| TC_13 | Messaging | Copy message to clipboard | Positive |
| TC_14 | Messaging | Send message from Client Laptop workspace | Positive |
| TC_15 | Messaging | Send message from Personal Device workspace | Positive |
| TC_16 | File Attachment | Open file picker via attachment button | Positive |
| TC_17 | File Attachment | Upload a valid file | Positive |
| TC_18 | Tools | Refresh Chat reloads messages | Positive |
| TC_19 | Tools | Clear All Chats — Cancel confirmation | Positive |
| TC_20 | Tools | Clear All Chats — Confirm clears messages | Positive |
| TC_21 | Tools | Switch to Light Mode | Positive |
| TC_22 | Tools | Switch back to Dark Mode | Positive |
| TC_23 | UI | Verify sidebar sections are visible | Positive |
| TC_24 | UI | Verify empty state message on fresh load | Positive |
| TC_25 | UI | Verify v2.0 Protected footer label | Positive |
| TC_26 | Messaging | Send button disabled on empty input | Negative |
| TC_27 | Messaging | Send whitespace-only message | Negative |
| TC_28 | Messaging | Send message with only spaces | Negative |
| TC_29 | Messaging | Clear All Chats — Cancel keeps messages intact | Negative |
| TC_30 | File Attachment | Upload unsupported file type | Negative |
| TC_31 | File Attachment | Upload zero-byte/empty file | Negative |
| TC_32 | Messaging | Paste extremely long text (>10,000 chars) | Negative |
| TC_33 | Tools | Refresh Chat with no messages | Negative |
| TC_34 | Tools | Clear All Chats when chat is already empty | Negative |
| TC_35 | UI | Verify no layout break on window resize | Negative |

---

## Detailed Test Cases

---

### Module: Page Load

---

#### TC_01 — Verify successful page load

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_01 |
| **Module** | Page Load |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Browser is open, internet connection is active |

**Steps:**
1. Open a browser and navigate to `https://tempsharem.netlify.app/`
2. Wait for the page to fully load

**Expected Result:**
- Page title is "messager"
- Sidebar is visible with "Messager" heading, Workspaces section, and Tools section
- Main content area displays the "Live Link Active" indicator
- Message input bar is visible at the bottom of the main area

---

#### TC_02 — Verify Live Link Active status indicator

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_02 |
| **Module** | Page Load |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page has loaded successfully |

**Steps:**
1. Observe the top of the main content area

**Expected Result:**
- A green dot icon is visible alongside the text "Live Link Active"
- The indicator confirms the messaging connection is active

---

### Module: Workspace

---

#### TC_03 — Switch to Personal Device workspace

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_03 |
| **Module** | Workspace |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded; "Client Laptop" workspace is active by default |

**Steps:**
1. In the sidebar under "WORKSPACES", click the **Personal Device** button

**Expected Result:**
- "Personal Device" button becomes highlighted (active state with blue background)
- "Client Laptop" button loses its active highlight
- Chat area updates to show messages associated with "Personal Device" workspace

---

#### TC_04 — Switch to Client Laptop workspace

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_04 |
| **Module** | Workspace |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | "Personal Device" workspace is currently active |

**Steps:**
1. In the sidebar under "WORKSPACES", click the **Client Laptop** button

**Expected Result:**
- "Client Laptop" button becomes highlighted (active state)
- "Personal Device" button loses its active highlight
- Chat area updates to show messages associated with "Client Laptop" workspace

---

#### TC_05 — Verify active workspace is highlighted

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_05 |
| **Module** | Workspace |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Page is loaded |

**Steps:**
1. Click the "Personal Device" workspace button
2. Observe the visual state of both workspace buttons

**Expected Result:**
- Only the selected workspace ("Personal Device") has a blue/highlighted background
- The other workspace ("Client Laptop") appears in default/unselected style
- Only one workspace can be active at a time

---

### Module: Messaging

---

#### TC_06 — Send a text message

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_06 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Critical |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field ("Type or paste message...")
2. Type: `Hello, this is a test message!`
3. Click the **Send** button (paper plane icon)

**Expected Result:**
- The message appears in the chat area as a message bubble
- The message bubble displays the active workspace name (e.g., "Personal Device")
- The message text is shown correctly
- A relative timestamp (e.g., "less than a minute ago") is displayed
- A "Copy to clipboard" button appears on the message
- The input field is cleared after sending

---

#### TC_07 — Send message using Enter key

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_07 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field
2. Type: `Message sent via Enter key`
3. Press the **Enter** key on the keyboard

**Expected Result:**
- The message is sent and appears in the chat area
- Input field is cleared after sending

---

#### TC_08 — Send a long text message

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_08 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field
2. Type a message of approximately 500 characters (e.g., repeated sentences)
3. Click the **Send** button

**Expected Result:**
- The full message is sent and displayed correctly in the chat area
- The message bubble expands or wraps properly without breaking the layout

---

#### TC_09 — Send special characters in message

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_09 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field
2. Type: `!@#$%^&*()_+-=[]{}|;':",.<>?/~\``
3. Click the **Send** button

**Expected Result:**
- The message with special characters is sent and displayed accurately
- No encoding issues or broken characters appear in the chat

---

#### TC_10 — Verify message displays workspace label

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_10 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | "Personal Device" workspace is active |

**Steps:**
1. Type a message and send it from the "Personal Device" workspace

**Expected Result:**
- The sent message bubble shows "Personal Device" as the workspace label at the top
- Switching to "Client Laptop" and sending a message shows "Client Laptop" label

---

#### TC_11 — Verify message timestamp is shown

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_11 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | A message has been sent |

**Steps:**
1. Send a message
2. Observe the message bubble footer area

**Expected Result:**
- A relative timestamp is displayed (e.g., "less than a minute ago", "1 minute ago")
- The timestamp updates over time as expected

---

#### TC_12 — Verify input clears after sending

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_12 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Type a message in the input field
2. Click the **Send** button

**Expected Result:**
- After sending, the message input field is empty and shows the placeholder text "Type or paste message..."

---

#### TC_13 — Copy message to clipboard

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_13 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | At least one message exists in the chat |

**Steps:**
1. Locate a message bubble in the chat area
2. Click the **Copy to clipboard** button (copy icon) on the message

**Expected Result:**
- The message text is copied to the clipboard
- A visual feedback (tooltip/icon change) may confirm the copy action

---

#### TC_14 — Send message from Client Laptop workspace

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_14 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded |

**Steps:**
1. Click "Client Laptop" workspace
2. Type `Client Laptop message` in the input field
3. Click **Send**

**Expected Result:**
- Message appears with "Client Laptop" label in the chat bubble

---

#### TC_15 — Send message from Personal Device workspace

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_15 |
| **Module** | Messaging |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded |

**Steps:**
1. Click "Personal Device" workspace
2. Type `Personal Device message` in the input field
3. Click **Send**

**Expected Result:**
- Message appears with "Personal Device" label in the chat bubble

---

### Module: File Attachment

---

#### TC_16 — Open file picker via attachment button

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_16 |
| **Module** | File Attachment |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. In the message input bar, click the **attachment/paperclip** icon button

**Expected Result:**
- A native OS file picker dialog opens
- User can browse to select files

---

#### TC_17 — Upload a valid file

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_17 |
| **Module** | File Attachment |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click the **attachment** icon button
2. Select a valid file (e.g., a .txt or .png file under 5 MB) from the file picker
3. Confirm the file selection

**Expected Result:**
- The selected file is attached and visible in the chat or input bar
- The file/attachment message appears in the chat area with the workspace label

---

### Module: Tools

---

#### TC_18 — Refresh Chat reloads messages

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_18 |
| **Module** | Tools |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | At least one message exists in the chat |

**Steps:**
1. Verify messages are visible in the chat area
2. Click the **Refresh Chat** button in the sidebar

**Expected Result:**
- The chat reloads/refreshes
- Existing messages remain visible (persistent data is retained)
- No duplicate messages appear

---

#### TC_19 — Clear All Chats — Cancel confirmation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_19 |
| **Module** | Tools |
| **Type** | Positive |
| **Priority** | High |
| **Precondition** | At least one message exists in the chat |

**Steps:**
1. Click the **Clear All Chats** button in the sidebar
2. A confirmation dialog appears: "Are you sure you want to clear ALL messages and files?"
3. Click **Cancel**

**Expected Result:**
- The confirmation dialog closes
- All existing messages remain in the chat area (nothing is deleted)

---

#### TC_20 — Clear All Chats — Confirm clears messages

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_20 |
| **Module** | Tools |
| **Type** | Positive |
| **Priority** | Critical |
| **Precondition** | At least one message exists in the chat |

**Steps:**
1. Click the **Clear All Chats** button in the sidebar
2. A confirmation dialog appears: "Are you sure you want to clear ALL messages and files?"
3. Click **OK** (confirm)

**Expected Result:**
- All messages are removed from the chat area
- The chat area returns to the empty state showing the ">_" icon and text "Secure encrypted workspace ready."

---

#### TC_21 — Switch to Light Mode

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_21 |
| **Module** | Tools |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Dark Mode is currently active (default state) |

**Steps:**
1. Click the **Light Mode** button in the sidebar Tools section

**Expected Result:**
- The application theme switches to a light color scheme (white/light backgrounds)
- The button label changes to "Dark Mode"
- All text and UI elements remain legible

---

#### TC_22 — Switch back to Dark Mode

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_22 |
| **Module** | Tools |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Light Mode is currently active |

**Steps:**
1. Click the **Dark Mode** button in the sidebar Tools section

**Expected Result:**
- The application theme switches back to dark color scheme (dark backgrounds)
- The button label changes to "Light Mode"
- All text and UI elements remain legible

---

### Module: UI / Layout

---

#### TC_23 — Verify sidebar sections are visible

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_23 |
| **Module** | UI |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | Page has loaded |

**Steps:**
1. Observe the left sidebar layout

**Expected Result:**
- "Messager" title/logo is visible at the top of the sidebar
- "WORKSPACES" section heading is visible
- "Client Laptop" and "Personal Device" workspace buttons are visible
- "TOOLS" section heading is visible
- "Refresh Chat", "Clear All Chats", and "Light Mode/Dark Mode" buttons are visible
- "v2.0 Protected" label is visible at the bottom of the sidebar

---

#### TC_24 — Verify empty state message on fresh load

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_24 |
| **Module** | UI |
| **Type** | Positive |
| **Priority** | Medium |
| **Precondition** | No messages exist in the chat (fresh session or after Clear All Chats) |

**Steps:**
1. Load the app or clear all chats
2. Observe the main chat area

**Expected Result:**
- A ">_" terminal-style icon is displayed in the center of the chat area
- Text "Secure encrypted workspace ready." is shown below the icon
- No message bubbles are present

---

#### TC_25 — Verify v2.0 Protected footer label

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_25 |
| **Module** | UI |
| **Type** | Positive |
| **Priority** | Low |
| **Precondition** | Page has loaded |

**Steps:**
1. Scroll to the bottom of the sidebar

**Expected Result:**
- "v2.0 Protected" text is visible at the bottom of the sidebar with an associated icon

---

## Negative Test Cases

---

#### TC_26 — Send button disabled on empty input

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_26 |
| **Module** | Messaging |
| **Type** | Negative |
| **Priority** | High |
| **Precondition** | Page loaded, message input field is empty |

**Steps:**
1. Ensure the message input field is empty
2. Observe the **Send** button state
3. Attempt to click the **Send** button

**Expected Result:**
- The **Send** button is visually disabled (grayed out)
- Clicking the disabled Send button does not send any message
- No empty message appears in the chat area

---

#### TC_27 — Send whitespace-only message

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_27 |
| **Module** | Messaging |
| **Type** | Negative |
| **Priority** | High |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field
2. Type only spaces (e.g., 5–10 spaces)
3. Attempt to click the **Send** button or press **Enter**

**Expected Result:**
- The message is not sent
- The Send button remains disabled, OR if sent, no blank/whitespace bubble appears in the chat
- Input field is cleared or the action is silently ignored

---

#### TC_28 — Send message with only spaces (tab characters)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_28 |
| **Module** | Messaging |
| **Type** | Negative |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click inside the message input field
2. Press the **Tab** key multiple times to enter tab characters
3. Attempt to click **Send**

**Expected Result:**
- The message is not sent, or if sent, the displayed content handles whitespace gracefully
- No broken layout or invisible message bubble appears

---

#### TC_29 — Clear All Chats — Cancel keeps messages intact

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_29 |
| **Module** | Tools |
| **Type** | Negative |
| **Priority** | High |
| **Precondition** | Multiple messages exist in the chat |

**Steps:**
1. Send 2–3 messages
2. Click **Clear All Chats**
3. When the confirmation dialog appears, click **Cancel**
4. Observe the chat area

**Expected Result:**
- All previously sent messages are still present
- No data loss occurs when the user cancels the clear operation

---

#### TC_30 — Upload unsupported file type

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_30 |
| **Module** | File Attachment |
| **Type** | Negative |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Click the **attachment** button
2. Select a file with an unsupported type (e.g., `.exe`, `.bat`, `.sh`)
3. Attempt to upload it

**Expected Result:**
- The application either rejects the file with a meaningful error message, OR the file picker filters out unsupported types
- No malicious or unsupported file is silently accepted

---

#### TC_31 — Upload zero-byte/empty file

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_31 |
| **Module** | File Attachment |
| **Type** | Negative |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Create an empty file (0 bytes) on the local machine
2. Click the **attachment** button
3. Select and attempt to upload the empty file

**Expected Result:**
- The application handles the empty file gracefully
- An error message is shown (e.g., "File is empty" or "Invalid file"), OR the upload is silently ignored
- No application crash or broken state occurs

---

#### TC_32 — Paste extremely long text (>10,000 characters)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_32 |
| **Module** | Messaging |
| **Type** | Negative |
| **Priority** | Medium |
| **Precondition** | Page loaded, a workspace is selected |

**Steps:**
1. Generate or copy a text string of more than 10,000 characters
2. Paste it into the message input field (Ctrl+V)
3. Attempt to click **Send**

**Expected Result:**
- The application either enforces a character limit with a clear error/counter, OR truncates the input
- The page does not freeze, crash, or become unresponsive
- If sent, the message is displayed without breaking the chat layout

---

#### TC_33 — Refresh Chat with no messages

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_33 |
| **Module** | Tools |
| **Type** | Negative |
| **Priority** | Low |
| **Precondition** | Chat is empty (no messages) |

**Steps:**
1. Ensure the chat area is empty
2. Click the **Refresh Chat** button

**Expected Result:**
- The refresh action completes without errors
- The empty state ("Secure encrypted workspace ready.") remains displayed
- No error messages or broken UI state appears

---

#### TC_34 — Clear All Chats when chat is already empty

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_34 |
| **Module** | Tools |
| **Type** | Negative |
| **Priority** | Low |
| **Precondition** | Chat is already empty |

**Steps:**
1. Ensure no messages are present in the chat
2. Click the **Clear All Chats** button
3. Click **OK** on the confirmation dialog

**Expected Result:**
- The action completes without throwing an error
- The empty state UI is still displayed correctly
- No JS errors or application crash occurs

---
 TC_35 — Verify no layout break on window resize

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_35 |
| **Module** | UI |
| **Type** | Negative |
| **Priority** | Medium |
| **Precondition** | Page loaded with some messages |

**Steps:**
1. Load the page and send a message
2. Resize the browser window to a very small size (e.g., 320×480 px)
3. Observe the layout
4. Resize back to a large/standard size (e.g., 1920×1080 px)

**Expected Result:**
- The sidebar and chat area adapt to the window size without overlapping or overflowing
- All interactive elements (buttons, input field) remain accessible
- No text is clipped or hidden in an unrecoverable state
- Resizing back to full size restores the original layout

####
---

## Test Execution Notes

| Field | Details |
|-------|---------|
| **Browser Tested** | Chromium (via Playwright MCP) |
| **Default Workspace on Load** | Client Laptop (highlighted by default) |
| **Default Theme on Load** | Dark Mode |
| **Chat Persistence** | Messages persist across page refreshes (stored in browser localStorage) |
| **Clear All Chats Dialog** | Native browser `confirm()` dialog — "Are you sure you want to clear ALL messages and files?" |
| **Send Button State** | Disabled when input is empty; enabled when text is entered |
| **File Attachment** | Opens native OS file picker |
| **Timestamps** | Relative format (e.g., "less than a minute ago", "2 minutes ago") |
