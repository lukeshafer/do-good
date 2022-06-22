module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    ckeditor: {
      enabled: true,
      config: {
        plugin: {
          // disable data-theme tag setting //
          setAttribute: false,
          // disable strapi theme, will use default ckeditor theme //
          strapiTheme: false,
          // styles applied to editor container (global scope) //
          styles: /* css */ `
            @import url("./colors.css");

            @font-face {
              font-family: 'Fira Code';
              src: url('/public/fonts/fira-code/FiraCode-VariableFont_wght.ttf') format('truetype');
            }

            :root{
              --primary-values: 230, 222, 255;
              --primary-color: rgb(var(--primary-values));

              --secondary-values: 37, 77, 86;
              --secondary-color: rgb(var(--secondary-values));

              --background-values: 245, 246, 248;
              --background-color: rgb(var(--background-values));

              --accent-values: 187, 208, 255;
              --accent-color: rgb(var(--accent-values));

              --border-values: 119, 131, 141;
              --border-color: rgb(var(--border-values));

              --box-shadow-values: 101, 117, 153;
              --box-shadow-color: rgb(var(--box-shadow-values));

              --h-shadow-primary-values: 204, 121, 116;
              --h-shadow-primary-color: rgb(var(--h-shadow-primary-values));

              --h-shadow-secondary-values: 39, 128, 148;
              --h-shadow-secondary-color: rgb(var(--h-shadow-secondary-values));

              --text-accent-values: 83, 68, 173;
              --text-accent-color: rgb(var(--text-accent-values));

              --button1-values: 207, 135, 144;
              --button1-color: rgb(var(--button1-values));

              --button2-values: 232, 201, 120;
              --button2-color: rgb(var(--button2-values));

              --button3-values: 125, 178, 170;
              --button3-color: rgb(var(--button3-values));

              --button4-values: 142, 156, 219;
              --button4-color: rgb(var(--button4-values));

              /* Colors based on context. Should be based on one of the above colors */
              --error-color: var(--button1-color);
            }

           `,
        },
        editor: {
          // editor default config

          // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
          // if you need markdown support and output set: removePlugins: [''],
          // default is
          removePlugins: ['Markdown'],

          // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
          toolbar: {
            items: [
              'paragraph',
              'heading1',
              'heading2',
              'heading3',
              '|',
              'bold',
              'italic',
              'fontColor',
              'fontBackgroundColor',
              'underline',
              'fontSize',
              'removeFormat',
              '|',
              'bulletedList',
              'todoList',
              'numberedList',
              '|',
              'alignment',
              'outdent',
              'indent',
              'horizontalLine',
              '|',
              'StrapiMediaLib',
              'insertTable',
              'blockQuote',
              'mediaEmbed',
              'link',
              'highlight',
              '|',
              'htmlEmbed',
              'sourceEditing',
              'code',
              'codeBlock',
              '|',
              'subscript',
              'superscript',
              'strikethrough',
              'specialCharacters',
              '|',
              'heading',
              'fullScreen',
              'undo',
              'redo',
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
          fontSize: {
            options: [9, 11, 13, 'default', 17, 19, 21, 27, 35],
            supportAllValues: false,
          },
          fontFamily: {
            options: [
              'default',
              'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
              'Courier New, Courier, monospace',
              'Georgia, serif',
              'Lucida Sans Unicode, Lucida Grande, sans-serif',
              'Tahoma, Geneva, sans-serif',
              'Times New Roman, Times, serif',
              'Trebuchet MS, Helvetica, sans-serif',
              'Verdana, Geneva, sans-serif',
              'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
            ],
            supportAllValues: true,
          },
          fontColor: {
            colors: [
              {
                color: 'var(--primary-color)',
                label: 'Primary',
              },
              {
                color: 'var(--secondary-color)',
                label: 'Secondary',
              },
              {
                color: 'var(--background-color)',
                label: 'Background',
              },
              {
                color: 'var(--accent-color)',
                label: 'Accent',
              },
              {
                color: 'var(--border-color)',
                label: 'Border',
              },
              {
                color: 'var(--box-shadow-color)',
                label: 'Box Shadow',
              },
              {
                color: 'var(--h-shadow-primary-color)',
                label: 'Header Shadow Primary',
              },
              {
                color: 'var(--h-shadow-secondary-color)',
                label: 'Header Shadow Secondary',
              },
              {
                color: 'var(--text-accent-color)',
                label: 'Text Accent',
              },
              {
                color: 'var(--button1-color)',
                label: 'Button 1',
              },
              {
                color: 'var(--button2-color)',
                label: 'Button 2',
              },
              {
                color: 'var(--button3-color)',
                label: 'Button 3',
              },
              {
                color: 'var(--button4-color)',
                label: 'Button 4',
              },
            ],
            columns: 5,
            documentColors: 15,
          },
          fontBackgroundColor: {
            colors: [
              {
                color: 'var(--primary-color)',
                label: 'Primary',
              },
              {
                color: 'var(--secondary-color)',
                label: 'Secondary',
              },
              {
                color: 'var(--background-color)',
                label: 'Background',
              },
              {
                color: 'var(--accent-color)',
                label: 'Accent',
              },
              {
                color: 'var(--border-color)',
                label: 'Border',
              },
              {
                color: 'var(--box-shadow-color)',
                label: 'Box Shadow',
              },
              {
                color: 'var(--h-shadow-primary-color)',
                label: 'Header Shadow Primary',
              },
              {
                color: 'var(--h-shadow-secondary-color)',
                label: 'Header Shadow Secondary',
              },
              {
                color: 'var(--text-accent-color)',
                label: 'Text Accent',
              },
              {
                color: 'var(--button1-color)',
                label: 'Button 1',
              },
              {
                color: 'var(--button2-color)',
                label: 'Button 2',
              },
              {
                color: 'var(--button3-color)',
                label: 'Button 3',
              },
              {
                color: 'var(--button4-color)',
                label: 'Button 4',
              },
            ],
            columns: 5,
            documentColors: 15,
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
          // default language: 'en',
          // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
          image: {
            resizeUnit: '%',
            resizeOptions: [
              {
                name: 'resizeImage:original',
                value: null,
                icon: 'original',
              },
              {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small',
              },
              {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium',
              },
              {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large',
              },
            ],
            toolbar: [
              'toggleImageCaption',
              'imageTextAlternative',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'linkImage',
              'resizeImage:25',
              'resizeImage:50',
              'resizeImage:75',
              'resizeImage:original',
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableCellProperties',
              'tableProperties',
              'toggleTableCaption',
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              {
                model: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph',
              },
              {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1',
              },
              {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2',
              },
              {
                model: 'heading3',
                view: 'h3',
                title: 'Heading 3',
                class: 'ck-heading_heading3',
              },
              {
                model: 'heading4',
                view: 'h4',
                title: 'Heading 4',
                class: 'ck-heading_heading4',
              },
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
          htmlSupport: {
            allow: [
              {
                name: 'img',
                attributes: {
                  sizes: true,
                  loading: true,
                },
              },
            ],
          },
        },
      },
    },
  };
};
