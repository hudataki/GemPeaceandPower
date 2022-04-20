module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         borderWidth: {
            1: '1px',
            3: '3px',
            5: '5px',
            7: '7px'
         },
         colors: {
            new_color1: '#461F3D',
            highlight_color1: '#F3CADF',
            button1: '#C78AA8',
            button2: '#7A199C',
            moon_date: '#FFBEBE',
            cart_bg: '#E8EEFF',
            footer_bg: '#FBE4F7',
            color_divide: '#A5A3A3',
            temp1: '#EFDBE6',
            temp2: '#E9DBE9',
            form: '#F4E9FF',
            shop: '#FFD9D9',
            filters: '#707070',
         },
         backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '90%': '90%',
            '50%': '50%',
            16: '4rem'
         },
         width: {
            22: '5.5rem',
            25: '6.25rem',
            30: '7.5rem'
         },
         height: {
            22: '5.5rem',
            25: '6.25rem',
            30: '7.5rem',
            footer: '333px'
         },

         fontSize: {
            copyright: '10px',
            28: '1.75rem'
         },

         fontFamily: {
            Ogg: ['Ogg'],
            Heebo: ['Heebo'],
            Bigilla: ['Bigilla'],
            Soria: ['Soria']
         },

         borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            md: '0.375rem',
            lg: '0.5rem',
            full: '9999px',
            large: '12px',

            test1: '1000px',
            test2: '700px',
            test3: '500px',
            test4: '300px',

            ali1: '3rem',
            ali2: '4rem',
            ali3: '5rem',
            oval: '50%'
         }
      }
   },
   variants: {
      extend: {}
   },
   plugins: []
};
