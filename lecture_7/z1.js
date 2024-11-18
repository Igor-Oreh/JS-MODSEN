/*
class EmailService {
   sendMessage(message) {
       console.log(`Отправка email с сообщением: ${message}`);
   }
}

class Notification {
   constructor() {
       this.emailService = new EmailService();
   }

   notify(message) {
       this.emailService.sendMessage(message);
   }
}

// Использование
const notification = new Notification();
notification.notify("Важное сообщение");

*/
// Нарушен принцип Открытия/Закрытия

class MessageService {
    sendMessage() {
        console.log(`Отправка сообщения: ${message}`);
    }
}


class EmailService extends MessageService {
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
 }
 
 class Notification {
    constructor(messageService) {
        this.messageService = messageService;
    }
 
    notify(message) {
        this.messageService.sendMessage(message);
    }
 }
 
 // Использование
 const emailService = new EmailService();
 const notification = new Notification(emailService);
 notification.notify("Важное сообщение");
 