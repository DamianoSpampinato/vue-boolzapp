const { createApp } = Vue;
createApp({
  data() {
    return {
      LastMessage: '',
      contactSearch: '',
      userText: '',
      activeItem: 0 ,  
      contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                ],
              },
              
            ],
          };
        },
        methods: {
          activeContact(index){
      this.activeItem = index
      },
      sendMessage() {
        const newMessage ={
            date: '25/10/1999',
            message: this.userText,
            status: 'sent'
          }
          this.contacts[this.activeItem].messages.push(newMessage);
          this.userText = ''
          setTimeout(this.answerMessage, 1000)
        },
      answerMessage(){
        const answer ={
          date: '25/10/1999',
          message: 'ok',
          status: 'recieved'
        }
        this.contacts[this.activeItem].messages.push(answer);
      },
      searchContact(){
        const search = this.contactSearch.toLowerCase()
        this.contacts.forEach(contact => {
          const name = contact.name.toLowerCase()
          if(!name.includes(search)){
          contact.visible= false
          }else{
            contact.visible = true
          }
        })
      },
      getLastMessage(){
        return this.messages[this.messages.length - 1 ].message
      }
      }
    }).mount('#app');
