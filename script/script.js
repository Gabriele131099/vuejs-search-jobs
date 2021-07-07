Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Volocom Technology',
                    position: 'Front End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/24/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Part Time'
                },  
                {
                    id: 3,
                    company: 'Umana S.P.A',
                    position: 'Junior developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/26/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Partita IVA'
                },  
                {
                    id: 4,
                    company: 'Iselection',
                    position: 'Programmatori java',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/30/2021',
                    logo: 'logo.jpg',
                    city: 'Frosinone',
                    contract: 'Stage'
                },  
    
            ],
            starred: [],//array che si popola selezionando il cuore e si svuota deselezionando! 
            applied: [],//array che si popola quando mi candido e si svuota quando deseleziono!  
            messagePopUp: false,
        },
        methods:{
            like: function (starred, id) { //al like esegue questo
                starred.push(id);
            },
            notLike: function (starred, id) { //quando deseleziono esegue quest'altro!
                let index = starred.indexOf(id)
                starred.splice(index, 1)
            },
            applyed: function (applied, id) {
                applied.push(id);
                this.messagePopUp = true;

                setTimeout(() => { //dopo 1s dalla candidatura si esegue il setTimeout!
                    this.messagePopUp = false;
                }, 1000);

            },
            applyedNone: function (applied, id) {
                let index = applied.indexOf(id)
                applied.splice(index, 1)
            },
            
            
        }
    }
 );
