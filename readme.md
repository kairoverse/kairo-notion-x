<p align="center">
  <img alt="React Notion X" src="https://raw.githubusercontent.com/NotionX/react-notion-x/master/media/notion-ts.png" width="689">
</p>

# Kairo - React Notion X

> React renderer for Notion. TS batteries included. ⚡️

[![Project Status: WIP – Initial development is in progress](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## Contents

- [Supported Blocks](#supported-blocks)
- [Resources](#resources)

## Supported Blocks

| Block Type               | Supported  | Block Type Enum        | Notes                                                                                                            |
| ------------------------ | ---------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Page                     | ⚠️ WIP     | `page`                 | -                                                                                                                |
| Text                     | ✅ Yes     | `paragraph`            | Supports `bold`, `italic`, `underline`, `strikethrough`, `code`, `color` and `background-color`                  |
| Bookmark                 | ⚠️ WIP     | `bookmark`             | Embedded preview of external URL                                                                                 |
| Bulleted List            | ⚠️ WIP     | `bulleted_list`        | `<ul>`                                                                                                           |
| Numbered List            | ⚠️ WIP     | `numbered_list`        | `<ol>`                                                                                                           |
| Heading 1                | ✅ Yes     | `heading_1`            | `<h1>` - With `Text` like formatting options                                                                     |
| Heading 2                | ✅ Yes     | `heading_2`            | `<h2>`- With `Text` like formatting options                                                                      |
| Heading 3                | ✅ Yes     | `heading_3`            | `<h3>` - With `Text` like formatting options                                                                     |
| Quote                    | ⚠️ WIP     | `quote`                | `"xxx"`                                                                                                          |
| Callout                  | ⚠️ WIP     | `callout`              | `! xxx`                                                                                                          |
| Equation (block)         | ⚠️ WIP     | `equation`             | [katex](https://katex.org/) via [react-katex](https://github.com/MatejBransky/react-katex)                       |
| Equation (inline)        | ⚠️ WIP     | `text`                 | [katex](https://katex.org/) via [react-katex](https://github.com/MatejBransky/react-katex)                       |
| Todos (checkboxes)       | ⚠️ WIP     | `to_do`                | -                                                                                                                |
| Table Of Contents        | ⚠️ WIP     | `table_of_contents`    | -                                                                                                                |
| Divider                  | ⚠️ WIP     | `divider`              | Horizontal line                                                                                                  |
| Column                   | ⚠️ WIP     | `column`               | -                                                                                                                |
| Column List              | ⚠️ WIP     | `column_list`          | -                                                                                                                |
| Toggle                   | ⚠️ WIP     | `toggle`               | [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)                                 |
| Image                    | ⚠️ WIP     | `image`                | `<img>`                                                                                                          |
| Embed                    | ⚠️ WIP     | `embed`                | Generic `iframe` embeds                                                                                          |
| Video                    | ⚠️ WIP     | `video`                | `iframe`                                                                                                         |
| Figma                    | ⚠️ WIP     | `figma`                | `iframe`                                                                                                         |
| Google Maps              | ⚠️ WIP     | `maps`                 | `iframe`                                                                                                         |
| Google Drive             | ⚠️ WIP     | `drive`                | Google Docs, Sheets, etc custom embed                                                                            |
| Tweet                    | ⚠️ WIP     | `tweet`                | Uses the twitter embedding SDK                                                                                   |
| PDF                      | ⚠️ WIP     | `pdf`                  | Uses S3 signed URLs and [react-pdf](https://github.com/wojtekmaj/react-pdf)                                      |
| Audio                    | ⚠️ WIP     | `audio`                | Uses S3 signed URLs and [HTML5 `audio` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) |
| File                     | ⚠️ WIP     | `file`                 | Uses S3 signed URLs (generic downloadable file)                                                                  |
| Link                     | ⚠️ WIP     | `text`                 | External links                                                                                                   |
| Page Link                | ⚠️ WIP     | `page`                 | Link to a notion page in the same workspace                                                                      |
| External Page Link       | ⚠️ WIP     | `text`                 | Links to a notion page or collection view in another workspace                                                   |
| Code (block)             | ⚠️ WIP     | `code`                 | Block code syntax highlighting via [prismjs](https://prismjs.com/)                                               |
| Code (inline)            | ⚠️ WIP     | `text`                 | Inline code formatting (no syntax highlighting)                                                                  |
| Collections              | ⚠️ WIP     |                        | Also known as [databases](https://www.notion.so/Intro-to-databases-fd8cd2d212f74c50954c11086d85997e)             |
| Collection View          | ⚠️ WIP     | `collection_view`      | Collections have a 1:N mapping to collection views                                                               |
| Collection View Table    | ⚠️ WIP     | `collection_view`      | `type = "table"` (default table view)                                                                            |
| Collection View Gallery  | ⚠️ WIP     | `collection_view`      | `type = "gallery"` (grid view)                                                                                   |
| Collection View Board    | ⚠️ WIP     | `collection_view`      | `type = "board"` (kanban view)                                                                                   |
| Collection View List     | ⚠️ WIP     | `collection_view`      | `type = "list"` (vertical list view)                                                                             |
| Collection View Calendar | ❌ Missing | `collection_view`      | `type = "calendar"` (embedded calendar view)                                                                     |
| Collection View Page     | ⚠️ WIP     | `collection_view_page` | Collection view as a standalone page                                                                             |

## Resources

[Notion Color guide](https://optemization.com/notion-color-guide)
