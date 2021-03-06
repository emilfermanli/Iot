import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    az: {
        translation: {
            "accountSettings": "Hesab Tənzimləmələri",
            "accountBilling": "Hesablama",
            "accountLog": "Çıxış",
            "allItm": "Bütün layihələr",
            "header": "Layihələr",
            "edit": "Redaktə edin",
            "billingInformation": "Ödəmə məlumatı",
            "paymentOptions": "Ödəniş variantları",
            "companyName": "Şirkət adı",
            "billingEmail": "Hesablama e-poçtu",
            "billingNote": "Hesablama qeydi",
            "companyAddress": "Şirkət ünvanı",
            "country": "Ölkə",
            "vatID": "Vat ID",
            "selectCard": "Kart seçin",
            "newCard": "Yeni kart",
            "otherPayment": "Digər ödəniş seçimləri",
            "saveCurrency": "Valyutanı yadda saxla",
            "info": "Məlumat: Hesablama istifadə müddətinə əsasən aylıq edilir",
            "newPassword": "Yeni şifrə",
            "confirmPassword": "Confirm new password",
            "changePassword": "Yeni şifrənin təkrarı",
            "newEmail": "Yeni email",
            "confirmEmail": "Yeni e-poçtun təkrarı",
            "changeEmail": "E-maili dəyişmək",
            "deleteAccount": "Hesabı silin",
            "deleteInfo": "Hesabınızı silmək üçün çalışan sənədlərin və ödənilməmiş fakturaların olmadığından əmin olmalısınız. Hələ fakturalanmamış istənilən bir müddət üçün son hesab-faktura alacaqsınız.",
            "language": "Dili dəyişdirin",
            "selectLanguage": "Dil seçin",
            "save": "Yadda saxla",
            "download": "Yükləyin",
            "reset": "Sıfırlayın",
            "send": "Göndər",
            "projectAction": "Yeni layihə",
            "projectEdit": "Layihəni düzəldin",
            "projectName": "Layihənin adı",
            "projectRegion": "Bölgəni seçin",
            "projectPlan": "Plan seçin",
            "projectKey": "Giriş açarı",
            "projectCancel": "Ləğv et",
            "projectStart": "Layihəyə başlayın",
            "projectEditButton": "Layihəni yenilə",
            "project": "Xidmətimizə xoş gəldiniz",
            "startProject": "Yeni layihəyə başlayın",
            "projectSettings": "Layihə parametrləri",
            "azureStream": "Azure Stream Analytics",
            "certificate": "Sertifikatlar",
            "messages": "Debug Mesajlar",
            "statics": "Statistikalar",
            "logs": "Qeydlər",
            "projectServer": "Server URL",
            "token": "Token",
            "port": "Port",
            "sslPort": "SSL Port",
            "planLimits": "Plan hədləri",
            "database": "Verilənlər bazası",
            "downloadText": "Verilənlər bazasını csv formatında yükləyin",
            "resetText": "Verilənlər bazasında saxlanan bütün məlumatları silə bilərsiniz",
            "connect": "Azure Stream Analytics-a qoşulun",
            "freePlan": "Azure Stream Analytics pulsuz planlarda mövcud deyil",
            "streamName": "Axın adı",
            "azureKey": "Giriş açarı",
            "azureSecretKey": "Gizli giriş açarı",
            "azureRegion": "Bölgə",
            "certificateDomain": "Domen adları",
            "certificateChain": "Ca zənciri",
            "certificateCertificate": "Sertifikat",
            "certificatePrivateKey": "Şəxsi açar",
            "certificateChange": "Sertifikatı dəyişdirin",
            "messagesInfo": "Mesajlar vasitəçi tərəfindən aldıqları kimi real vaxt rejimində göstərilir.",
            "messagesSend": "Mesaj göndərin",
            "messagesTopic": "Mövzu",
            "messagesMessage": "Mesaj",
            "messagesReceive": "Alınan mesaj",
            "messagesClearSession": "Abunəlik",
            "messagesClient": "Topic",
            "messagesSign": "Daxil ol",
            "messagesProject": "Layihənin adı",
            "headerMQ": "MQ connections",
            "headerSSLMQ": "SSL MQ connections",
            "headerWebSocket": "Websocket connections",
            "maxConnected": "Max connected:",
            "online": "Online:",
            "savedConnections": "Saved connections:",
            "footerAbout": "Haqqımızda",
            "footerHistory": "Tarix",
            "footerProduct": "Məhsullar",
            "footerContact": "Əlaqə",
            "footerCareer": "Karyera",
            "footerTerms": "Şərtlər və qaydalar",
            "footerService": "Xidmətlər",
            "footerSocial": "Bizi tapın",
            "footerIot": "İoT şəbəkələr",
            "footerPrivacy": "Gizlilik siyasəti",
            "footerlaw": "Bütün hüquqlar qorunur.",
            "username": "İstifadəçi adı",
            "password": "Şifrə",
            "certificateEdit": "Sertifikatı redaktə et",
            "azureEdit": "Redaktə et və axın",
            "saveStream": "Saxla və axın et",
            "azureMessageCount": "Azure Mesaj sayı",
            "subscription": "Abonə ol",
            "debugMessagesInfo": "This is for debugging"
        }
    },
    en: {
        translation: {
            "accountSettings": "Account settings",
            "accountBilling": "Billing",
            "accountLog": "Log out",
            "allItm": "All project",
            "header": "Projects",
            "edit": "Edit",
            "billingInformation": "Billing information",
            "paymentOptions": "Payment options",
            "companyName": "Company name",
            "billingEmail": "Billing email",
            "billingNote": "Billing note",
            "companyAddress": "Company address",
            "country": "Country",
            "vatID": "Vat ID",
            "selectCard": "Select card",
            "newCard": "New card",
            "otherPayment": "Other payment options",
            "saveCurrency": "Save currency",
            "info": "Info: Billing is performed monthly, based on usage",
            "newPassword": "New password",
            "confirmPassword": "Confirm new password",
            "changePassword": "Change password",
            "newEmail": "New email",
            "confirmEmail": "Confirm new email",
            "changeEmail": "Change email",
            "deleteAccount": "Delete account",
            "deleteInfo": "To be able to delete your account you have to makes sure you have no running instances and no unpaid invoices. You will receive a final invoice for any instance time not yet invoiced.",
            "language": "Change language",
            "selectLanguage": "Select language",
            "save": "Save",
            "download": "Download",
            "reset": "Reset",
            "send": "Send",
            "saveStream": "Save and Stream",
            "projectAction": "New project",
            "projectEdit": "Edit project",
            "projectName": "Project name",
            "projectRegion": "Select region",
            "projectPlan": "Select plan",
            "projectKey": "Access key",
            "projectCancel": "Cancel",
            "projectStart": "Start project",
            "projectEditButton": "Save project",
            "project": "Welcome to our service and etc...",
            "startProject": "Start new project",
            "projectSettings": "Project settings",
            "azureStream": "Azure Stream Analytics",
            "messages": "Debug messages",
            "statics": "Statistics",
            "logs": "Logs",
            "projectServer": "Server URL",
            "token": "Token",
            "port": "Port",
            "sslPort": "SSL Port",
            "planLimits": "Plan limits",
            "database": "Database",
            "downloadText": "Download database in csv format",
            "resetText": "You can clear all stored data in database",
            "connect": "Connect to Azure Stream Analytics",
            "freePlan": "Azure Stream Analytics is not available on free plans",
            "streamName": "Stream name",
            "azureKey": "Access key",
            "azureSecretKey": "Secret Access key",
            "azureRegion": "Region",
            "certificate": "Certificates",
            "certificateDomain": "Domain names",
            "certificateChain": "Ca chain",
            "certificateCertificate": "Certificate",
            "certificatePrivateKey": "Private key",
            "certificateChange": "Change certificate",
            "headerMQ": "MQ connections",
            "headerSSLMQ": "SSL MQ connections",
            "headerWebSocket": "Websocket connections",
            "maxConnected": "Max connected:",
            "online": "Online:",
            "savedConnections": "Saved connections:",
            "messagesInfo": "Messages are displayed in real-time as they are received by the broker.",
            "messagesSend": "Send message",
            "messagesTopic": "Topic",
            "messagesMessage": "Message",
            "messagesReceive": "Received message",
            "messagesClearSession": "Subscription",
            "messagesClient": "Topic",
            "messagesSign": "Sign in",
            "messagesProject": "Project Name",
            "footerAbout": "About us",
            "footerHistory": "History",
            "footerProduct": "Products",
            "footerContact": "Contact us",
            "footerCareer": "Career",
            "footerTerms": "Terms & Conditions",
            "footerService": "Services",
            "footerSocial": "Find Us",
            "footerIot": "IoT networks",
            "footerPrivacy": "Privacy Policy",
            "footerlaw": "All rights reserved..",
            "username": "Username",
            "password": "password",
            "certificateEdit": "Edit certificate",
            "azureEdit": "Edit and stream",
            "azureMessageCount": "Azure message count",
            "subscription": "Subscribe",
            "debugMessagesInfo": "This is for debugging"
        }
    },
    ru: {
        translation: {
            "accountSettings": "Настройки учетной записи",
            "accountBilling": "биллинг",
            "accountLog": "Выйти",
            "allItm": "Весь проект",
            "header": "проектов",
            "edit": "Pедактировать",
            "changePassword": "Изменить пароль",
            "newEmail": "Новый e-mail",
            "confirmEmail": "Подтвердите новый адрес электронной почты",
            "changeEmail": "Сменить имейл",
            "deleteAccount": "Удалить аккаунт",
            "deleteInfo": "Чтобы иметь возможность удалить свою учетную запись, вы должны убедиться, что у вас нет запущенных экземпляров и неоплаченных счетов. Вы получите окончательный счет за любое время, еще не выставленное.",
            "selectLanguage": "Выберите язык",
            "newPassword": "Новый пароль",
            "confirmPassword": "Подтвердите новый пароль",
            "language": "Изменение языка",
            "billingInformation": "Платежная информация",
            "paymentOptions": "Варианты оплаты",
            "companyName": "Название компании",
            "billingEmail": "Платежный адрес электронной почты",
            "billingNote": "Платежная записка",
            "companyAddress": "Адрес компании",
            "country": "Страна",
            "vatID": "Vat ID",
            "selectCard": "Выберите карту",
            "newCard": "Новая карта",
            "otherPayment": "Другие способы оплаты",
            "saveCurrency": "Сохранить валюту",
            "info": "Информация: выставление счетов производится ежемесячно, в зависимости от использования",
            "save": "Сохранить",
            "download": "Скачать",
            "reset": "Сброс",
            "send": "Отправить",
            "projectAction": "Новый проект",
            "projectEdit": "Редактировать проект",
            "projectName": "Название проекта",
            "projectRegion": "Выберите регион",
            "projectPlan": "Выберите план",
            "projectKey": "Ключ доступа",
            "projectCancel": "Отмена",
            "projectStart": "Начать проект",
            "project": "Добро пожаловать на наш сервис",
            "startProject": "Начать новый проект",
            "projectSettings": "Настройки проекта",
            "azureStream": "Azure Stream Analytics",
            "messages": "Cообщения отладки",
            "statics": "Cтатика",
            "logs": "бревна",
            "projectServer": "URL сервера",
            "token": "Token",
            "port": "Port",
            "sslPort": "SSL Port",
            "planLimits": "Пределы плана",
            "database": "База данных",
            "downloadText": "Скачать базу данных в формате csv",
            "resetText": "Вы можете очистить все сохраненные данные в базе данных",
            "connect": "Подключитесь к Azure Stream Analytics",
            "freePlan": "Analytics Azure Stream недоступна для бесплатных планов",
            "streamName": "Имя потока",
            "azureKey": "Ключ доступа",
            "azureSecretKey": "Секретный ключ доступа",
            "azureRegion": "Область",
            "certificate": "Сертификаты",
            "certificateDomain": "Доменные имена",
            "certificateChain": "Ca цепь",
            "certificateCertificate": "Cертификат",
            "certificatePrivateKey": "Закрытый ключ",
            "certificateChange": "Изменить сертификат",
            "headerMQ": "MQ связи",
            "headerSSLMQ": "SSL MQ связи",
            "headerWebSocket": "Websocket связи",
            "maxConnected": "Максимум подключен:",
            "online": "Oнлайн:",
            "savedConnections": "Сохраненные соединения:",
            "messagesInfo": "Сообщения отображаются в режиме реального времени по мере их получения брокером.",
            "messagesSend": "Отправить сообщение",
            "messagesTopic": "Тема",
            "messagesMessage": "Сообщение",
            "messagesReceive": "Полученное сообщение",
            "messagesClearSession": "подписка",
            "messagesClient": "Topic",
            "messagesSign": "Bойти в систему",
            "messagesProject": "Hазвание проекта",
            "footerAbout": "О нас",
            "footerHistory": "History",
            "footerProduct": "история",
            "footerContact": "Связаться с нами",
            "footerCareer": "Карьера",
            "footerTerms": "Условия использования",
            "footerService": "Сервисы",
            "footerSocial": "Найди нас",
            "footerIot": "IoT сети",
            "footerPrivacy": "политика конфиденциальности",
            "footerlaw": "Все права защищены.",
            "username": "имя пользователя",
            "password": "пароль",
            "certificateEdit": "Pедактировать сертификат",
            "saveStream": "Сохранить и поток",
            "azureEdit": "Редактировать и поток",
            "azureMessageCount": "Количество сообщений Azure",
            "subscription": "подписываться",
            "debugMessagesInfo": "Это для отладки"
        }
    }
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        debug: false,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })


export default i18n 