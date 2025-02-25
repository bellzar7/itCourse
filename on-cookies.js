const COOKIE_TYPES = ["essential", "performance", "advertising"]

document.addEventListener("DOMContentLoaded", function () {
    /**
     * В language додавати 2-значний код країни або мови
     * ( https://www.w3schools.com/tags/ref_language_codes.asp )
     * В banner вказувати відносний шлях до зображення для кукі банера
     * приклад: "../cookie-banners/ai/banner5.webp"
     * В policy вказувати відносний шлях до кукі політики
     * приклад: "../policies/en/cookie.html"
     *
     * Кукі політику брати з policies діректорії
     * Кожний раз використовувати нове зображення для баннеру! Можна своє.
     *
     * Пам'ятайте про підключення on-cookies.css!
     */
    new OnCookies({
        language: "en",
        banner: "./banner2.jpg",
        policy: "./cookie.html"
    });
});

/**
 * @type {{ [x: string]: string }}
 * @description Text for cookie banner in different languages.
 * */
const languageDictionary = {
    ar: {
        "cookie-accept__heading": "مرحبًا! بالمناسبة، نحن نستخدم ملفات تعريف الارتباط.",
        "cookie-accept__text-1": "يتم استخدام ملفات تعريف الارتباط للوصول إلى المعلومات وتخزينها على جهازك حتى نتمكن من تقديم محتوى مخصص بناءً على بياناتك.",
        "cookie-accept__text-2": "باختيار \"أوافق\"، فإنك توافق على استخدامنا لملفات تعريف الارتباط. ويمكنك الرفض\n" +
            " أو سحب الموافقة باختيار \"إدارة الإعدادات\".",
        "cookie-accept__button": "أوافق",
        "cookie-accept__manage-settings": "إدارة الإعدادات",
        "cookie-settings__heading": "إدارة ملفات تعريف الارتباط",
        "cookie-settings__intro": "هنا يمكنك إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك",
        "cookie-settings__subheading1": "ملفات تعريف الارتباط الأساسية",
        "cookie-settings__description1": "ملفات تعريف الارتباط الأساسية أو ملفات تعريف الارتباط الضرورية للغاية هي ملفات تعريف الارتباط الضرورية لكي يعمل موقع الويب بشكل صحيح. وهي ملفات تعريف الارتباط الضرورية لتقديم خدمة عبر الإنترنت على موقع ويب أو تُستخدم فقط لتنفيذ أو تسهيل نقل الاتصالات عبر الشبكة.",
        "cookie-settings__subheading2": "ملفات تعريف الارتباط الخاصة بالأداء",
        "cookie-settings__description2": "تقوم ملفات تعريف الارتباط الخاصة بالأداء بجمع البيانات حول تفاعلات المستخدم داخل موقع الويب. يشار إليها باسم ملفات تعريف الارتباط التحليلية، وهي تعمل على تتبع مشاهدات الصفحة، وقياس مدة مشاركة المستخدم، وتحديد الأخطاء في الصفحات التي بها خلل، ومراقبة معدلات الارتداد و أوقات تحميل الموقع.",
        "cookie-settings__subheading3": "ملفات تعريف الارتباط الإعلانية",
        "cookie-settings__description3": "تقوم ملفات تعريف الارتباط الإعلانية بجمع المعلومات من جهازك لعرض الإعلانات التي تتوافق مع اهتماماتك. يتم تعيين ملفات تعريف الارتباط هذه بواسطة المعلنين بإذن مالك موقع الويب للتأكد من أن الإعلانات التي تراها ذات صلة بك.",
        "cookie-settings__preference-button": "حفظ التفضيلات",
        "cookie-settings__policy-link": "سياسة ملفات تعريف الارتباط"
    },
    az: {
        "cookie-accept__heading": "Hey! Yeri gəlmişkən, kukilərdən istifadə edirik.",
        "cookie-accept__text-1": "Kukilər cihazınızda məlumat əldə etmək və saxlamaq üçün istifadə olunur ki, biz sizin məlumatlarınız əsasında fərdiləşdirilmiş məzmun təklif edirik.",
        "cookie-accept__text-2": "\"Razıyam\" seçməklə kukilərdən istifadəmizə razılıq verirsiniz. Siz imtina edə bilərsiniz\n" +
            " və ya \"Parametrləri idarə et\" seçimi ilə razılığı geri götürün.",
        "cookie-accept__button": "Razıyam",
        "cookie-accept__manage-settings": "Parametrləri idarə et",
        "cookie-settings__heading": "Cookie İdarəetmə",
        "cookie-settings__intro": "Burada kuki seçimlərinizi idarə edə bilərsiniz:",
        "cookie-settings__subheading1": "Əsas kukilər",
        "cookie-settings__description1": "Əsas kukilər və ya ciddi şəkildə zəruri kukilər vebsaytın düzgün işləməsi üçün vacib olan kukilərdir. Bunlar vebsaytda onlayn xidmət göstərmək üçün zəruri olan və ya yalnız məlumatların ötürülməsini həyata keçirmək və ya asanlaşdırmaq üçün istifadə olunan kukilərdir. şəbəkə üzərindən rabitə.",
        "cookie-settings__subheading2": "Performans kukiləri",
        "cookie-settings__description2": "Performans kukiləri veb-sayt daxilində istifadəçi qarşılıqlı əlaqələri haqqında məlumat toplayır. Analitik kukilər kimi istinad edilir, onlar səhifə baxışlarını izləmək, istifadəçinin əlaqə müddətini ölçmək, nasaz səhifələrdəki xətaları müəyyən etmək və həm sıçrayış, həm də geri dönmə nisbətlərinə nəzarət etmək üçün xidmət edir. saytın yükləmə vaxtları.",
        "cookie-settings__subheading3": "Reklam kukiləri",
        "cookie-settings__description3": "Reklam kukiləri maraqlarınıza uyğun gələn reklamları göstərmək üçün cihazınızdan məlumat toplayır. Bu kukilər gördüyünüz reklamların sizə uyğun olmasını təmin etmək üçün vebsayt sahibinin icazəsi ilə reklamçılar tərəfindən təyin edilir.",
        "cookie-settings__preference-button": "Tercihləri yadda saxla",
        "cookie-settings__policy-link": "Kuki siyasəti",
    },
    bg: {
        "cookie-accept__heading": "Хей! Между другото, използваме бисквитки.",
        "cookie-accept__text-1": "Бисквитките се използват за достъп и съхраняване на информация на вашето устройство, така че да предлагаме персонализирано съдържание въз основа на вашите данни.",
        "cookie-accept__text-2": "Избирайки \"Съгласен съм\", вие се съгласявате с използването на бисквитки. Можете да откажете\n" +
            " или оттеглете съгласието, като изберете \"Управление на настройките\".",
        "cookie-accept__button": "Съгласен съм",
        "cookie-accept__manage-settings": "Управление на настройките",
        "cookie-settings__heading": "Управление на бисквитки",
        "cookie-settings__intro": "Тук можете да управлявате вашите предпочитания за бисквитки:",
        "cookie-settings__subheading1": "Основни бисквитки",
        "cookie-settings__description1": "Основните бисквитки или строго необходимите бисквитки са бисквитки, които са от съществено значение за правилното функциониране на даден уебсайт. Това са бисквитки, които са необходими за предоставяне на онлайн услуга на уебсайт или се използват единствено за извършване или улесняване на предаването на комуникации по мрежа.",
        "cookie-settings__subheading2": "Бисквитки за ефективност",
        "cookie-settings__description2": "Бисквитките за ефективност събират данни за потребителските взаимодействия в рамките на уебсайт. Наричани аналитични бисквитки, те служат за проследяване на показвания на страници, измерване на продължителността на ангажираност на потребителите, идентифициране на грешки на неправилно функциониращи страници и наблюдение както на степента на отпадане, така и времена за зареждане на сайта.",
        "cookie-settings__subheading3": "Рекламни бисквитки",
        "cookie-settings__description3": "Рекламните бисквитки събират информация от вашето устройство, за да показват реклами, които отговарят на вашите интереси. Тези бисквитки се задават от рекламодатели с разрешението на собственика на уебсайта, за да гарантират, че рекламите, които виждате, са подходящи за вас.",
        "cookie-settings__preference-button": "Запазване на предпочитанията",
        "cookie-settings__policy-link": "Правила за бисквитки",
    },
    bn: {
        "cookie-accept__heading": "Гэй! Дарэчы, мы выкарыстоўваем файлы cookie.",
        "cookie-accept__text-1": "Файлы cookie выкарыстоўваюцца для доступу і захоўвання інфармацыі на вашай прыладзе, каб мы прапаноўвалі персаналізаваны кантэнт на аснове вашых даных.",
        "cookie-accept__text-2": "Выбіраючы \"Я згаджаюся\", вы згаджаецеся на выкарыстанне намі файлаў cookie. Вы можаце адмовіцца\n" +
            " або адклікаць згоду, выбраўшы \"Кіраванне наладамі\".",
        "cookie-accept__button": "Я згодны",
        "cookie-accept__manage-settings": "Кіраваць наладамі",
        "cookie-settings__heading": "Кіраванне файламі cookie",
        "cookie-settings__intro": "Тут вы можаце кіраваць сваімі наладамі файлаў cookie:",
        "cookie-settings__subheading1": "Асноўныя файлы cookie",
        "cookie-settings__description1": "Асноўныя кукі або строга неабходныя кукі - гэта кукі, неабходныя для карэктнай працы вэб-сайта. Гэта кукі, неабходныя для прадастаўлення інтэрнэт-сэрвісаў на вэб-сайце або выкарыстоўваюцца выключна для выканання або палягчэння перадачы сувязь праз сетку.",
        "cookie-settings__subheading2": "Прадукцыйныя файлы cookie",
        "cookie-settings__description2": "Прадукцыйныя файлы cookie збіраюць даныя аб узаемадзеянні карыстальнікаў на вэб-сайце. Называюцца аналітычнымі файламі cookie, яны служаць для адсочвання праглядаў старонак, вымярэння працягласці ўзаемадзеяння карыстальнікаў, выяўлення памылак на старонках, якія не працуюць, а таксама маніторынгу паказчыкаў адмоваў і час загрузкі сайта.",
        "cookie-settings__subheading3": "Рэкламныя файлы cookie",
        "cookie-settings__description3": "Рэкламныя файлы cookie збіраюць інфармацыю з вашай прылады, каб паказваць рэкламу, якая адпавядае вашым інтарэсам. Гэтыя файлы cookie ўсталёўваюцца рэкламадаўцамі з дазволу ўладальніка сайта, каб гарантаваць, што рэклама, якую вы бачыце, адпавядае вам.",
        "cookie-settings__preference-button": "Захаваць налады",
        "cookie-settings__policy-link": "Палітыка кукі",
    },
    zh: {
        "cookie-accept__heading": "嘿！顺便说一句，我们正在使用 cookie。",
        "cookie-accept__text-1": "Cookie 用于访问和存储您设备上的信息，以便我们根据您的数据提供个性化内容。",
        "cookie-accept__text-2": "选择\"我同意\"即表示您同意我们使用cookie。您可以拒绝\n" +
            " 或通过选择“管理设置”撤回同意。",
        "cookie-accept__button": "我同意",
        "cookie-accept__manage-settings": "管理设置",
        "cookie-settings__heading": "Cookie 管理",
        "cookie-settings__intro": "在这里您可以管理您的 cookie 首选项：",
        "cookie-settings__subheading1": "基本 Cookie",
        "cookie-settings__description1": "基本 cookie 或严格必要的 cookie 是网站正常运行所必需的 cookie。这些 cookie 是在网站上提供在线服务所必需的，或者仅用于执行或促进传输 通过网络进行通信。",
        "cookie-settings__subheading2": "性能 Cookie",
        "cookie-settings__description2": "性能 cookie 收集网站内用户交互的数据。称为分析 cookie，它们用于跟踪页面浏览量、测量用户参与的持续时间、识别故障页面上的错误以及监控跳出率和 网站加载时间。",
        "cookie-settings__subheading3": "广告 Cookie",
        "cookie-settings__description3": "广告 cookie 从您的设备收集信息，以展示符合您兴趣的广告。这些 cookie 由广告商在网站所有者的许可下设置，以确保您看到的广告与您相关。",
        "cookie-settings__preference-button": "保存偏好设置",
        "cookie-settings__policy-link": "Cookie 政策",
    },
    cs: {
        "cookie-accept__heading": "Ahoj! Používáme soubory cookie.",
        "cookie-accept__text-1": "Soubory cookie se používají k přístupu a ukládání informací ve vašem zařízení, abychom mohli nabízet personalizovaný obsah založený na vašich datech.",
        "cookie-accept__text-2": "Výběrem možnosti \"Souhlasím\" souhlasíte s naším používáním souborů cookie. Můžete odmítnout\n" +
            " nebo zrušte souhlas výběrem \"Spravovat nastavení\".",
        "cookie-accept__button": "Souhlasím",
        "cookie-accept__manage-settings": "Spravovat nastavení",
        "cookie-settings__heading": "Správa souborů cookie",
        "cookie-settings__intro": "Zde můžete spravovat předvolby souborů cookie:",
        "cookie-settings__subheading1": "Základní soubory cookie",
        "cookie-settings__description1": "Základní soubory cookie nebo nezbytně nutné soubory cookie jsou soubory cookie, které jsou nezbytné pro správné fungování webových stránek. Jedná se o soubory cookie, které jsou nezbytné k poskytování online služby na webu nebo se používají výhradně k provádění nebo usnadnění přenosu komunikace po síti.",
        "cookie-settings__subheading2": "Soubory cookie pro výkon",
        "cookie-settings__description2": "Soubory cookie výkonu shromažďují údaje o uživatelských interakcích na webu. Označují se jako analytické soubory cookie a slouží ke sledování zobrazení stránek, měření trvání zapojení uživatelů, identifikaci chyb na nefunkčních stránkách a sledování míry okamžitého opuštění a časy načítání stránek.",
        "cookie-settings__subheading3": "Reklamní soubory cookie",
        "cookie-settings__description3": "Reklamní soubory cookie shromažďují informace z vašeho zařízení za účelem zobrazování reklam, které odpovídají vašim zájmům. Tyto soubory cookie nastavují inzerenti se svolením vlastníka webu, aby zajistili, že zobrazené reklamy jsou pro vás relevantní.",
        "cookie-settings__preference-button": "Uložit předvolby",
        "cookie-settings__policy-link": "Zásady souborů cookie",
    },
    de: {
        "cookie-accept__heading": "Hey! Wir verwenden übrigens Cookies.",
        "cookie-accept__text-1": "Cookies werden verwendet, um auf Informationen auf Ihrem Gerät zuzugreifen und diese zu speichern, damit wir personalisierte Inhalte basierend auf Ihren Daten anbieten können.",
        "cookie-accept__text-2": "Durch die Auswahl von „Ich stimme zu“ stimmen Sie der Verwendung von Cookies zu. Sie können dies ablehnen\n" +
            " oder widerrufen Sie Ihre Einwilligung, indem Sie \"Einstellungen verwalten\" wählen.",
        "cookie-accept__button": "Ich stimme zu",
        "cookie-accept__manage-settings": "Einstellungen verwalten",
        "cookie-settings__heading": "Cookie-Verwaltung",
        "cookie-settings__intro": "Hier können Sie Ihre Cookie-Einstellungen verwalten:",
        "cookie-settings__subheading1": "otwendige Cookies",
        "cookie-settings__description1": "Notwendige Cookies oder unbedingt notwendige Cookies sind Cookies, die für das ordnungsgemäße Funktionieren einer Website unbedingt erforderlich sind. Dabei handelt es sich um Cookies, die für die Bereitstellung eines Onlinedienstes auf einer Website erforderlich sind oder ausschließlich dazu dienen, die Übermittlung durchzuführen oder zu erleichtern.“ Kommunikation über ein Netzwerk.",
        "cookie-settings__subheading2": "Leistungscookies",
        "cookie-settings__description2": "Leistungscookies sammeln Daten über Benutzerinteraktionen innerhalb einer Website. Sie werden als Analysecookies bezeichnet und dienen dazu, Seitenaufrufe zu verfolgen, die Dauer der Benutzerinteraktion zu messen, Fehler auf nicht funktionierenden Seiten zu identifizieren und sowohl Absprungraten als auch zu überwachen Ladezeiten der Website.",
        "cookie-settings__subheading": "Werbe-Cookies",
        "cookie-settings__description3": "Werbe-Cookies sammeln Informationen von Ihrem Gerät, um Anzeigen zu schalten, die Ihren Interessen entsprechen. Diese Cookies werden von Werbetreibenden mit Erlaubnis des Website-Eigentümers gesetzt, um sicherzustellen, dass die Anzeigen, die Sie sehen, für Sie relevant sind.",
        "cookie-settings__preference-button": "Einstellungen speichern",
        "cookie-settings__policy-link": "Cookie-Richtlinie",
    },
    en: {
        "cookie-accept__heading": "Hey! We are using cookies, by the way.",
        "cookie-accept__text-1": "Cookies are used to access and store information on your device so that we offer personalized content based on your data.",
        "cookie-accept__text-2": "By choosing \"I agree\", you consent to our use of cookies. You can refuse\n" +
            "                or withdraw consent by choosing \"Manage settings\".",
        "cookie-accept__button": "I agree",
        "cookie-accept__manage-settings": "Manage settings",
        "cookie-settings__heading": "Cookie Management",
        "cookie-settings__intro": "Here you can manage your cookie preferences:",
        "cookie-settings__subheading1": "Essential Cookies",
        "cookie-settings__description1": "Essential cookies or strictly necessary cookies are cookies that are essential for a website to function correctly. These are cookies that are necessary to provide an online service on a website or used solely to carry out or facilitate the transmission of communications over a network.",
        "cookie-settings__subheading2": "Performance Cookies",
        "cookie-settings__description2": "Performance cookies gather data on user interactions within a website. Referred to as analytics cookies, they serve to track page views, measure the duration of user engagement, identify errors on malfunctioning pages, and monitor both bounce rates and site loading times.",
        "cookie-settings__subheading3": "Advertising Cookies",
        "cookie-settings__description3": "Advertising cookies collect information from your device to show ads that match your interests. These cookies are set by advertisers with the website owner’s permission to ensure the ads you see are relevant to you.",
        "cookie-settings__preference-button": "Save preferences",
        "cookie-settings__policy-link": "Cookie Policy",
    },
    es: {
        "cookie-accept__heading": "¡Oye! Por cierto, estamos usando cookies.",
        "cookie-accept__text-1": "Las cookies se utilizan para acceder y almacenar información en su dispositivo para que podamos ofrecer contenido personalizado basado en sus datos.",
        "cookie-accept__text-2": "Al elegir \"Acepto\", aceptas nuestro uso de cookies. Puedes rechazar\n" +
            " o retirar el consentimiento eligiendo \"Administrar configuración\".",
        "cookie-accept__button": "Estoy de acuerdo",
        "cookie-accept__manage-settings": "Administrar configuración",
        "cookie-settings__heading": "Gestión de cookies",
        "cookie-settings__intro": "Aquí puedes administrar tus preferencias de cookies:",
        "cookie-settings__subheading1": "Cookies esenciales",
        "cookie-settings__description1": "Las cookies esenciales o cookies estrictamente necesarias son cookies que son esenciales para que un sitio web funcione correctamente. Son cookies que son necesarias para proporcionar un servicio en línea en un sitio web o se utilizan únicamente para realizar o facilitar la transmisión de comunicaciones a través de una red.",
        "cookie-settings__subheading2": "Cookies de rendimiento",
        "cookie-settings__description2": "Las cookies de rendimiento recopilan datos sobre las interacciones del usuario dentro de un sitio web. Conocidas como cookies de análisis, sirven para realizar un seguimiento de las visitas a la página, medir la duración de la participación del usuario, identificar errores en páginas que no funcionan correctamente y monitorear las tasas de rebote y tiempos de carga del sitio.",
        "cookie-settings__subheading3": "Cookies publicitarias",
        "cookie-settings__description3": "Las cookies publicitarias recopilan información de su dispositivo para mostrar anuncios que coincidan con sus intereses. Estas cookies las configuran los anunciantes con el permiso del propietario del sitio web para garantizar que los anuncios que ve sean relevantes para usted.",
        "cookie-settings__preference-button": "Guardar preferencias",
        "cookie-settings__policy-link": "Política de cookies",
    },
    fr: {
        "cookie-accept__heading": "Hé ! Au fait, nous utilisons des cookies.",
        "cookie-accept__text-1": "Les cookies sont utilisés pour accéder et stocker des informations sur votre appareil afin que nous puissions proposer un contenu personnalisé basé sur vos données.",
        "cookie-accept__text-2": "En choisissant \"J'accepte\", vous consentez à notre utilisation des cookies. Vous pouvez refuser\n" +
            " ou retirer votre consentement en choisissant \"Gérer les paramètres\".",
        "cookie-accept__button": "J'accepte",
        "cookie-accept__manage-settings": "Gérer les paramètres",
        "cookie-settings__heading": "Gestion des cookies",
        "cookie-settings__intro": "Ici, vous pouvez gérer vos préférences en matière de cookies :",
        "cookie-settings__subheading1": "Cookies essentiels",
        "cookie-settings__description1": "Les cookies essentiels ou cookies strictement nécessaires sont des cookies indispensables au bon fonctionnement d'un site Internet. Il s'agit de cookies nécessaires à la fourniture d'un service en ligne sur un site Internet ou utilisés uniquement pour réaliser ou faciliter la transmission de communications sur un réseau.",
        "cookie-settings__subheading2": "Cookies de performance",
        "cookie-settings__description2": "Les cookies de performance collectent des données sur les interactions des utilisateurs au sein d'un site Web. Appelés cookies d'analyse, ils servent à suivre les pages vues, à mesurer la durée de l'engagement des utilisateurs, à identifier les erreurs sur les pages défectueuses et à surveiller à la fois les taux de rebond et temps de chargement du site.",
        "cookie-settings__subheading3": "Cookies publicitaires",
        "cookie-settings__description3": "Les cookies publicitaires collectent des informations sur votre appareil pour afficher des publicités qui correspondent à vos intérêts. Ces cookies sont définis par les annonceurs avec l'autorisation du propriétaire du site Web pour garantir que les publicités que vous voyez vous concernent.",
        "cookie-settings__preference-button": "Enregistrer les préférences",
        "cookie-settings__policy-link": "Politique en matière de cookies",
    },
    he: {
        "cookie-accept__heading": "היי! אנחנו משתמשים בעוגיות, דרך אגב.",
        "cookie-accept__text-1": "קובצי Cookie משמשים לגישה ואחסון מידע במכשיר שלך כך שאנו מציעים תוכן מותאם אישית על סמך הנתונים שלך.",
        "cookie-accept__text-2": "על ידי בחירת \"אני מסכים\", אתה מסכים לשימוש שלנו בקובצי Cookie. אתה יכול לסרב\n" +
            " או לבטל את ההסכמה על ידי בחירה ב\'ניהול הגדרות\".",
        "cookie-accept__button": "אני מסכים",
        "cookie-accept__manage-settings": "נהל הגדרות",
        "cookie-settings__heading": "ניהול קובצי Cookie",
        "cookie-settings__intro": "כאן תוכל לנהל את העדפות העוגיות שלך:",
        "cookie-settings__subheading1": "עוגיות חיוניות",
        "cookie-settings__description1": "עוגיות חיוניות או קובצי Cookie הכרחיים בהחלט הם קובצי Cookie החיוניים לתפקוד תקין של אתר אינטרנט. אלו הן קובצי Cookie הנחוצים למתן שירות מקוון באתר או המשמשים אך ורק לביצוע או להקל על שידור של תקשורת דרך רשת.",
        "cookie-settings__subheading2": "עוגיות ביצועים",
        "cookie-settings__description2": "עוגיות ביצועים אוספות נתונים על אינטראקציות של משתמשים בתוך אתר אינטרנט. מכונות עוגיות אנליטיות, הן משמשות לעקוב אחר צפיות בדפים, למדוד את משך מעורבות המשתמש, לזהות שגיאות בדפים לא תקינים, ולנטר את שיעורי היציאה מדף הכניסה והן. זמני טעינת האתר.",
        "cookie-settings__subheading3": "עוגיות פרסום",
        "cookie-settings__description3": "עוגיות פרסום אוספות מידע מהמכשיר שלך כדי להציג מודעות התואמות את תחומי העניין שלך. קובצי Cookie אלה מוגדרים על ידי מפרסמים באישור בעל האתר כדי להבטיח שהמודעות שאתה רואה רלוונטיות עבורך.",
        "cookie-settings__preference-button": "שמור העדפות",
        "cookie-settings__policy-link": "מדיניות קובצי Cookie",
    },
    hr: {
        "cookie-accept__heading": "Pozdrav! Usput, koristimo kolačiće.",
        "cookie-accept__text-1": "Kolačići se koriste za pristup i pohranu informacija na vašem uređaju, stoga vam nudimo personalizirani sadržaj na temelju vaših podataka.",
        "cookie-accept__text-2": "Odabirom opcije \"Slažem se\", pristajete na našu upotrebu kolačića. Možete odbiti ili povući svoj pristanak odabirom \"Upravljanje postavkama\".",
        "cookie-accept__button": "Slažem se",
        "cookie-accept__manage-settings": "Upravljanje postavkama",
        "cookie-settings__heading": "Upravljanje kolačićima",
        "cookie-settings__intro": "Ovdje možete upravljati postavkama kolačića:",
        "cookie-settings__subheading1": "Osnovni kolačići",
        "cookie-settings__description1": "Osnovni kolačići ili strogo nužni kolačići su kolačići koji su potrebni za pravilno funkcioniranje web stranice. To su kolačići potrebni za pružanje online usluga na web stranici ili se koriste isključivo za izvođenje ili olakšavanje prijenosa komunikacije preko mreže.",
        "cookie-settings__subheading2": "Kolačići za izvedbu",
        "cookie-settings__description2": "Kolačići za izvedbu prikupljaju podatke o interakciji korisnika na web stranici. Nazivaju se analitički kolačići. Služe za praćenje pregleda stranica, mjerenje trajanja interakcije korisnika, identifikaciju pogrešaka na stranicama koje ne rade, kao i za praćenje stopa napuštanja i vremena učitavanja stranice.",
        "cookie-settings__subheading3": "Oglašivački kolačići",
        "cookie-settings__description3": "Oglašivački kolačići prikupljaju informacije s vašeg uređaja kako bi prikazali oglase koji odgovaraju vašim interesima. Ti kolačići postavljaju oglašivači s dopuštenjem vlasnika web stranice kako bi osigurali da je oglas koji vidite relevantan za vas.",
        "cookie-settings__preference-button": "Spremi postavke",
        "cookie-settings__policy-link": "Politika kolačića",
    },
    hu: {
        "cookie-accept__heading": "Hé! Egyébként cookie-kat használunk.",
        "cookie-accept__text-1": "A cookie-k az Ön eszközén lévő információk elérésére és tárolására szolgálnak, így az Ön adatai alapján személyre szabott tartalmat kínálunk.",
        "cookie-accept__text-2": "Az \"Elfogadom\" kiválasztásával hozzájárul a cookie-k használatához. Elutasíthatja\n" +
            " vagy vonja vissza a hozzájárulást a \"Beállítások kezelése\".",
        "cookie-accept__button": "Elfogadom",
        "cookie-accept__manage-settings": "Beállítások kezelése",
        "cookie-settings__heading": "Cookie-kezelés",
        "cookie-settings__intro": "Itt kezelheti cookie-beállításait:",
        "cookie-settings__subheading1": "Alapvető cookie-k",
        "cookie-settings__description1": "A nélkülözhetetlen vagy feltétlenül szükséges cookie-k olyan cookie-k, amelyek elengedhetetlenek a webhely megfelelő működéséhez. Ezek olyan cookie-k, amelyek szükségesek egy webhelyen történő online szolgáltatás biztosításához, vagy kizárólag a kommunikáció hálózaton keresztül.",
        "cookie-settings__subheading2": "Teljesítményt biztosító cookie-k",
        "cookie-settings__description2": "A teljesítményt növelő cookie-k adatokat gyűjtenek a webhelyen belüli felhasználói interakciókról. Analitikai cookie-knak nevezik őket, az oldalmegtekintések nyomon követésére, a felhasználói elköteleződés időtartamának mérésére, a hibásan működő oldalak hibáinak azonosítására, valamint a visszafordulási arány és a visszafordulási arány figyelésére szolgálnak. webhely betöltési idők.",
        "cookie-settings__subheading3": "Hirdetési cookie-k",
        "cookie-settings__description3": "A hirdetési cookie-k információkat gyűjtenek az Ön eszközéről, hogy az Ön érdeklődési körének megfelelő hirdetéseket jelenítsenek meg. Ezeket a cookie-kat a hirdetők állítják be a webhely tulajdonosának engedélyével annak érdekében, hogy a megjelenő hirdetések relevánsak legyenek az Ön számára.",
        "cookie-settings__preference-button": "Beállítások mentése",
        "cookie-settings__policy-link": "Cookie-szabályzat",
    },
    in: {
        "cookie-accept__heading": "Hei! Ngomong-ngomong, kami menggunakan cookie.",
        "cookie-accept__text-1": "Cookie digunakan untuk mengakses dan menyimpan informasi di perangkat Anda sehingga kami menawarkan konten yang dipersonalisasi berdasarkan data Anda.",
        "cookie-accept__text-2": "Dengan memilih \"Saya setuju\", Anda menyetujui penggunaan cookie kami. Anda dapat menolak\n" +
            " atau membatalkan persetujuan dengan memilih \"Kelola pengaturan\".",
        "cookie-accept__button": "Saya setuju",
        "cookie-accept__manage-settings": "Kelola pengaturan",
        "cookie-settings__heading": "Manajemen Cookie",
        "cookie-settings__intro": "Di sini Anda dapat mengatur preferensi cookie Anda:",
        "cookie-settings__subheading1": "Cookie Penting",
        "cookie-settings__description1": "Cookie penting atau cookie yang benar-benar diperlukan adalah cookie yang penting agar situs web dapat berfungsi dengan benar. Ini adalah cookie yang diperlukan untuk menyediakan layanan online di situs web atau digunakan semata-mata untuk melaksanakan atau memfasilitasi transmisi komunikasi melalui jaringan.",
        "cookie-settings__subheading2": "Cookie Kinerja",
        "cookie-settings__description2": "Cookie kinerja mengumpulkan data tentang interaksi pengguna dalam situs web. Disebut sebagai cookie analitik, cookie ini berfungsi untuk melacak tampilan halaman, mengukur durasi keterlibatan pengguna, mengidentifikasi kesalahan pada halaman yang tidak berfungsi, dan memantau rasio pentalan dan waktu pemuatan situs.",
        "cookie-settings__subheading3": "Cookie Iklan",
        "cookie-settings__description3": "Cookie iklan mengumpulkan informasi dari perangkat Anda untuk menampilkan iklan yang sesuai dengan minat Anda. Cookie ini disetel oleh pengiklan dengan izin pemilik situs web untuk memastikan iklan yang Anda lihat relevan bagi Anda.",
        "cookie-settings__preference-button": "Simpan preferensi",
        "cookie-settings__policy-link": "Kebijakan Cookie",
    },
    it: {
        "cookie-accept__heading": "Ehi! A proposito, stiamo utilizzando i cookie.",
        "cookie-accept__text-1": "I cookie vengono utilizzati per accedere e archiviare informazioni sul tuo dispositivo in modo da poter offrire contenuti personalizzati basati sui tuoi dati.",
        "cookie-accept__text-2": "Scegliendo \"Accetto\", acconsenti all'utilizzo dei cookie. Puoi rifiutare\n" +
            " oppure revocare il consenso scegliendo \"Gestisci impostazioni\".",
        "cookie-accept__button": "Sono d'accordo",
        "cookie-accept__manage-settings": "Gestisci impostazioni",
        "cookie-settings__heading": "Gestione dei cookie",
        "cookie-settings__intro": "Qui puoi gestire le tue preferenze sui cookie:",
        "cookie-settings__subheading1": "Cookie essenziali",
        "cookie-settings__description1": "I cookie essenziali o cookie strettamente necessari sono cookie essenziali per il corretto funzionamento di un sito Web. Si tratta di cookie necessari per fornire un servizio online su un sito Web o utilizzati esclusivamente per eseguire o facilitare la trasmissione di comunicazioni su una rete.",
        "cookie-settings__subheading2": "Cookie prestazionali",
        "cookie-settings__description2": "I cookie prestazionali raccolgono dati sulle interazioni dell'utente all'interno di un sito web. Denominati cookie analitici, servono a monitorare le visualizzazioni delle pagine, misurare la durata del coinvolgimento dell'utente, identificare errori su pagine malfunzionanti e monitorare sia la frequenza di rimbalzo che tempi di caricamento del sito.",
        "cookie-settings__subheading3": "Cookie pubblicitari",
        "cookie-settings__description3": "I cookie pubblicitari raccolgono informazioni dal tuo dispositivo per mostrare annunci che corrispondono ai tuoi interessi. Questi cookie sono impostati dagli inserzionisti con il permesso del proprietario del sito web per garantire che gli annunci che vedi siano pertinenti per te.",
        "cookie-settings__preference-button": "Salva preferenze",
        "cookie-settings__policy-link": "Politica sui cookie",
    },
    ja: {
        "cookie-accept__heading": "こんにちは! ちなみに、Cookie を使用しています。",
        "cookie-accept__text-1": "Cookie は、お客様のデータに基づいてパーソナライズされたコンテンツを提供できるよう、お客様のデバイス上の情報にアクセスして保存するために使用されます。",
        "cookie-accept__text-2": "「同意する」を選択すると、Cookie の使用に同意したことになります。拒否することもできます\n" +
            "または、「設定の管理」を選択して同意を撤回します。",
        "cookie-accept__button": "同意します",
        "cookie-accept__manage-settings": "設定を管理",
        "cookie-settings__heading": "Cookie 管理",
        "cookie-settings__intro": "ここで Cookie の設定を管理できます:",
        "cookie-settings__subheading1": "必須 Cookie",
        "cookie-settings__description1": "必須 Cookie または厳密に必要な Cookie は、Web サイトが正しく機能するために不可欠な Cookie です。これらは、Web サイトでオンライン サービスを提供するために必要な Cookie、または送信を実行または促進するためにのみ使用される Cookie です。 ネットワークを介した通信。",
        "cookie-settings__subheading2": "パフォーマンス Cookie",
        "cookie-settings__description2": "パフォーマンス Cookie は、Web サイト内のユーザー インタラクションに関するデータを収集します。分析 Cookie と呼ばれ、ページ ビューを追跡し、ユーザー エンゲージメントの継続時間を測定し、誤動作しているページのエラーを識別し、直帰率と サイトの読み込み時間。",
        "cookie-settings__subHeading3": "広告用 Cookie",
        "cookie-settings__description3": "広告 Cookie は、ユーザーの興味に合った広告を表示するためにデバイスから情報を収集します。これらの Cookie は、表示される広告がユーザーに関連していることを確認するために、Web サイト所有者の許可を得て広告主によって設定されます。",
        "cookie-settings__preference-button": "設定を保存",
        "cookie-settings__policy-link": "Cookie ポリシー",
    },
    kk: {
        "cookie-accept__heading": "Сәлем! Айтпақшы, біз cookie файлдарын пайдаланып жатырмыз.",
        "cookie-accept__text-1": "Cookie файлдары сіздің деректеріңізге негізделген жекелендірілген мазмұнды ұсыну үшін құрылғыңыздағы ақпаратқа қол жеткізу және сақтау үшін пайдаланылады.",
        "cookie-accept__text-2": "\"Келісемін\" опциясын таңдау арқылы сіз cookie файлдарын пайдалануымызға келісесіз. Бас тартуыңызға болады\n" +
            " немесе \"Параметрлерді басқару\" таңдау арқылы келісімнен бас тартыңыз.",
        "cookie-accept__button": "Келісемін",
        "cookie-accept__manage-settings": "Параметрлерді басқару",
        "cookie-settings__heading": "Cookie файлдарын басқару",
        "cookie-settings__intro": "Осында сіз cookie файлдарының теңшелімдерін басқара аласыз:",
        "cookie-settings__subheading1": "Маңызды cookie файлдары",
        "cookie-settings__description1": "Маңызды cookie файлдары немесе қатаң қажетті cookie файлдары веб-сайттың дұрыс жұмыс істеуі үшін маңызды болып табылатын cookie файлдары. Бұл веб-сайтта онлайн қызметті қамтамасыз ету үшін қажет немесе тек файлдарды жіберуді жүзеге асыру немесе жеңілдету үшін пайдаланылатын cookie файлдары. желі арқылы байланыс.",
        "cookie-settings__subheading2": "Өнімділік кукилері",
        "cookie-settings__description2": "Өнімділік cookie файлдары веб-сайттағы пайдаланушының өзара әрекеттесулері туралы деректерді жинайды. Аналитикалық cookie файлдары деп аталады, олар бет көріністерін қадағалауға, пайдаланушының қатысу ұзақтығын өлшеуге, дұрыс жұмыс істемейтін беттердегі қателерді анықтауға және кері шығу жылдамдығы мен екеуін де бақылауға қызмет етеді. сайтты жүктеу уақыттары.",
        "cookie-settings__subheading3": "Жарнамалық cookie файлдары",
        "cookie-settings__description3": "Жарнамалық cookie файлдары сіздің қызығушылықтарыңызға сәйкес келетін жарнамаларды көрсету үшін құрылғыңыздан ақпаратты жинайды. Бұл cookie файлдары сіз көретін жарнамалардың сізге сәйкес келетініне көз жеткізу үшін веб-сайт иесінің рұқсатымен жарнама берушілермен орнатылады.",
        "cookie-settings__preference-button": "Параметрлерді сақтау",
        "cookie-settings__policy-link": "Cookie саясаты",
    },
    ko: {
        "cookie-accept__heading": "안녕하세요! 그런데 우리는 쿠키를 사용하고 있습니다.",
        "cookie-accept__text-1": "쿠키는 귀하의 데이터를 기반으로 개인화된 콘텐츠를 제공하기 위해 귀하의 장치에 있는 정보에 액세스하고 정보를 저장하는 데 사용됩니다.",
        "cookie-accept__text-2": "\"동의함\"을 선택하면 쿠키 사용에 동의하는 것입니다. 거부할 수 있습니다.\n" +
            " 또는 \"설정 관리\"를 선택하여 동의를 철회할 수 있습니다.",
        "cookie-accept__button": "동의합니다",
        "cookie-accept__manage-settings": "설정 관리",
        "cookie-settings__heading": "쿠키 관리",
        "cookie-settings__intro": "여기에서 쿠키 기본 설정을 관리할 수 있습니다:",
        "cookie-settings__subheading1": "필수 쿠키",
        "cookie-settings__description1": "필수 쿠키 또는 반드시 필요한 쿠키는 웹사이트가 올바르게 작동하는 데 필수적인 쿠키입니다. 이는 웹사이트에서 온라인 서비스를 제공하는 데 필요하거나 다음의 전송을 수행하거나 촉진하는 데에만 사용되는 쿠키입니다. 네트워크를 통한 통신.",
        "cookie-settings__subheading2": "성능 쿠키",
        "cookie-settings__description2": "성능 쿠키는 웹사이트 내의 사용자 상호 작용에 대한 데이터를 수집합니다. 분석 쿠키라고 하는 쿠키는 페이지 조회수를 추적하고, 사용자 참여 기간을 측정하고, 오작동하는 페이지의 오류를 식별하고 이탈률과 이탈률을 모두 모니터링하는 데 사용됩니다. 사이트 로딩 시간.",
        "cookie-settings__subheading3": "광고 쿠키",
        "cookie-settings__description3": "광고 쿠키는 귀하의 관심분야에 맞는 광고를 표시하기 위해 귀하의 기기에서 정보를 수집합니다. 이 쿠키는 귀하가 보는 광고가 귀하와 관련이 있는지 확인하기 위해 웹사이트 소유자의 허가를 받아 광고주가 설정합니다.",
        "cookie-settings__preference-button": "기본 설정 저장",
        "cookie-settings__policy-link": "쿠키 정책",
    },
    ms: {
        "cookie-accept__heading": "Hei! Kami sedang menggunakan kuki.",
        "cookie-accept__text-1": "Kuki digunakan untuk mengakses dan menyimpan maklumat pada peranti anda supaya kami menawarkan kandungan yang diperibadikan berdasarkan data anda.",
        "cookie-accept__text-2": "Dengan memilih \"Saya bersetuju\", anda bersetuju dengan penggunaan kuki kami. Anda boleh menolak\n" +
            " atau tarik balik persetujuan dengan memilih \"Urus tetapan\".",
        "cookie-accept__button": "Saya bersetuju",
        "cookie-accept__manage-settings": "Urus tetapan",
        "cookie-settings__heading": "Pengurusan Kuki",
        "cookie-settings__intro": "Di sini anda boleh menguruskan pilihan kuki anda:",
        "cookie-settings__subheading1": "Kuki Penting",
        "cookie-settings__description1": "Kuki penting atau kuki yang sangat diperlukan ialah kuki yang penting untuk tapak web berfungsi dengan betul. Ini adalah kuki yang diperlukan untuk menyediakan perkhidmatan dalam talian pada tapak web atau digunakan semata-mata untuk menjalankan atau memudahkan penghantaran komunikasi melalui rangkaian.",
        "cookie-settings__subheading2": "Kuki Prestasi",
        "cookie-settings__description2": "Kuki prestasi mengumpulkan data tentang interaksi pengguna dalam tapak web. Dirujuk sebagai kuki analitik, kuki tersebut berfungsi untuk menjejak paparan halaman, mengukur tempoh penglibatan pengguna, mengenal pasti ralat pada halaman yang tidak berfungsi dan memantau kedua-dua kadar lantunan dan masa memuatkan tapak.",
        "cookie-settings__subheading3": "Kuki Pengiklanan",
        "cookie-settings__description3": "Kuki pengiklanan mengumpul maklumat daripada peranti anda untuk memaparkan iklan yang sepadan dengan minat anda. Kuki ini ditetapkan oleh pengiklan dengan kebenaran pemilik tapak web untuk memastikan iklan yang anda lihat adalah berkaitan dengan anda.",
        "cookie-settings__preference-button": "Simpan pilihan",
        "cookie-settings__policy-link": "Dasar Kuki",
    },
    nl: {
        "cookie-accept__heading": "Hé! We gebruiken trouwens cookies.",
        "cookie-accept__text-1": "Cookies worden gebruikt om toegang te krijgen tot informatie op uw apparaat en deze op te slaan, zodat we gepersonaliseerde inhoud kunnen aanbieden op basis van uw gegevens.",
        "cookie-accept__text-2": "Door \"Ik ga akkoord\" te kiezen, stemt u in met ons gebruik van cookies. U kunt weigeren\n" +
            " of trek uw toestemming in door \"Instellingen beheren\" te kiezen.",
        "cookie-accept__button": "Ik ga akkoord",
        "cookie-accept__manage-settings": "Instellingen beheren",
        "cookie-settings__heading": "Cookiebeheer",
        "cookie-settings__intro": "Hier kunt u uw cookievoorkeuren beheren:",
        "cookie-settings__subheading1": "Essentiële cookies",
        "cookie-settings__description1": "Essentiële cookies of strikt noodzakelijke cookies zijn cookies die essentieel zijn voor het correct functioneren van een website. Dit zijn cookies die noodzakelijk zijn om een online dienst op een website aan te bieden of die uitsluitend worden gebruikt om de overdracht van communicatie via een netwerk.",
        "cookie-settings__subheading2": "Prestatiecookies",
        "cookie-settings__description2": "Prestatiecookies verzamelen gegevens over gebruikersinteracties binnen een website. Deze worden ook wel analytische cookies genoemd en dienen om paginaweergaven bij te houden, de duur van gebruikersbetrokkenheid te meten, fouten op slecht functionerende pagina's te identificeren en zowel bouncepercentages als Laadtijden van de site.",
        "cookie-settings__subheading3": "Advertentiecookies",
        "cookie-settings__description3": "Advertentiecookies verzamelen informatie van uw apparaat om advertenties weer te geven die aansluiten bij uw interesses. Deze cookies worden door adverteerders geplaatst met toestemming van de website-eigenaar om ervoor te zorgen dat de advertenties die u ziet relevant voor u zijn.",
        "cookie-settings__preference-button": "Voorkeuren opslaan",
        "cookie-settings__policy-link": "Cookiebeleid",
    },
    pl: {
        "cookie-accept__heading": "Hej! Nawiasem mówiąc, używamy plików cookie.",
        "cookie-accept__text-1": "Pliki cookie służą do uzyskiwania dostępu do informacji i przechowywania ich na Twoim urządzeniu, dzięki czemu możemy oferować spersonalizowane treści w oparciu o Twoje dane.",
        "cookie-accept__text-2": "Wybierając „Zgadzam się”, wyrażasz zgodę na używanie przez nas plików cookie. Możesz odmówić\n" +
            " lub wycofaj zgodę wybierając opcję `Zarządzaj ustawieniami\".",
        "cookie-accept__button": "Zgadzam się",
        "cookie-accept__manage-settings": "Zarządzaj ustawieniami",
        "cookie-settings__heading": "Zarządzanie plikami cookies",
        "cookie-settings__intro": "Tutaj możesz zarządzać swoimi preferencjami dotyczącymi plików cookie:",
        "cookie-settings__subheading1": "Niezbędne pliki cookie",
        "cookie-settings__description1": "Niezbędne pliki cookie lub ściśle niezbędne pliki cookie to pliki cookie niezbędne do prawidłowego działania witryny internetowej. Są to pliki cookie niezbędne do świadczenia usług online w witrynie internetowej lub wykorzystywane wyłącznie do przeprowadzania lub ułatwiania przesyłania komunikacja przez sieć.",
        "cookie-settings__subheading2": "Wydajnościowe pliki cookie",
        "cookie-settings__description2": "Wydajnościowe pliki cookie gromadzą dane o interakcjach użytkowników w witrynie internetowej. Nazywane analitycznymi plikami cookie służą do śledzenia odsłon stron, pomiaru czasu trwania zaangażowania użytkownika, identyfikowania błędów na nieprawidłowo działających stronach oraz monitorowania zarówno współczynnika odrzuceń, jak i czasy ładowania witryny.",
        "cookie-settings__subheading3": "reklamowe pliki cookie",
        "cookie-settings__description3": "Reklamowe pliki cookie zbierają informacje z Twojego urządzenia, aby wyświetlać reklamy odpowiadające Twoim zainteresowaniom. Te pliki cookie są ustawiane przez reklamodawców za zgodą właściciela witryny, aby zapewnić, że wyświetlane reklamy będą dla Ciebie odpowiednie.",
        "cookie-settings__preference-button": "Zapisz preferencje",
        "cookie-settings__policy-link": "Polityka Cookies",
    },
    pt: {
        "cookie-accept__heading": "Ei! A propósito, estamos usando cookies.",
        "cookie-accept__text-1": "Cookies são usados para acessar e armazenar informações em seu dispositivo para que possamos oferecer conteúdo personalizado com base em seus dados.",
        "cookie-accept__text-2": "Ao escolher \"Concordo\", você concorda com o uso de cookies. Você pode recusar\n" +
            " ou retire o consentimento escolhendo \"Gerenciar configurações\".",
        "cookie-accept__button": "Concordo",
        "cookie-accept__manage-settings": "Gerenciar configurações",
        "cookie-settings__heading": "Gerenciamento de Cookies",
        "cookie-settings__intro": "Aqui você pode gerenciar suas preferências de cookies:",
        "cookie-settings__subheading1": "Cookies essenciais",
        "cookie-settings__description1": "Cookies essenciais ou cookies estritamente necessários são cookies essenciais para o correto funcionamento de um site. São cookies necessários para fornecer um serviço online em um site ou usados exclusivamente para realizar ou facilitar a transmissão de comunicações através de uma rede.",
        "cookie-settings__subheading2": "Cookies de desempenho",
        "cookie-settings__description2": "Cookies de desempenho coletam dados sobre as interações do usuário em um site. Chamados de cookies analíticos, eles servem para rastrear visualizações de páginas, medir a duração do envolvimento do usuário, identificar erros em páginas com mau funcionamento e monitorar as taxas de rejeição e tempos de carregamento do site.",
        "cookie-settings__subheading3": "Cookies de publicidade",
        "cookie-settings__description3": "Cookies de publicidade coletam informações do seu dispositivo para mostrar anúncios que correspondem aos seus interesses. Esses cookies são definidos por anunciantes com a permissão do proprietário do site para garantir que os anúncios que você vê sejam relevantes para você.",
        "cookie-settings__preference-button": "Salvar preferências",
        "cookie-settings__policy-link": "Política de Cookies",
    },
    ro: {
        "cookie-accept__heading": "Hei! Apropo, folosim cookie-uri.",
        "cookie-accept__text-1": "Cookie-urile sunt folosite pentru a accesa și stoca informații pe dispozitivul dvs., astfel încât să oferim conținut personalizat pe baza datelor dvs.",
        "cookie-accept__text-2": "Alegând \"Sunt de acord\", sunteți de acord cu utilizarea cookie-urilor. Puteți refuza\n" +
            " sau retrageți consimțământul alegând \"Gestionați setările\".",
        "cookie-accept__button": "Sunt de acord",
        "cookie-accept__manage-settings": "Gestionați setările",
        "cookie-settings__heading": "Gestionarea cookie-urilor",
        "cookie-settings__intro": "Aici vă puteți gestiona preferințele cookie-urilor:",
        "cookie-settings__subheading1": "Cookie-uri esențiale",
        "cookie-settings__description1": "Cookie-urile esențiale sau cookie-urile strict necesare sunt cookie-uri care sunt esențiale pentru ca un site web să funcționeze corect. Acestea sunt cookie-uri care sunt necesare pentru a furniza un serviciu online pe un site web sau utilizate exclusiv pentru a efectua sau facilita transmiterea comunicații printr-o rețea.",
        "cookie-settings__subheading2": "Cookie-uri de performanță",
        "cookie-settings__description2": "Cookie-urile de performanță adună date despre interacțiunile utilizatorilor într-un site web. Denumite cookie-uri de analiză, acestea servesc la urmărirea vizualizărilor paginilor, la măsurarea duratei implicării utilizatorilor, la identificarea erorilor pe paginile care funcționează defectuos și la monitorizarea ratelor de respingere și timpii de încărcare a site-ului.",
        "cookie-settings__subheading3": "Cookie-uri de publicitate",
        "cookie-settings__description3": "Cookie-urile de publicitate colectează informații de pe dispozitivul dvs. pentru a afișa anunțuri care se potrivesc cu interesele dvs. Aceste module cookie sunt setate de agenții de publicitate cu permisiunea proprietarului site-ului web pentru a se asigura că reclamele pe care le vedeți sunt relevante pentru dvs.",
        "cookie-settings__preference-button": "Salvați preferințele",
        "cookie-settings__policy-link": "Politica privind cookie-urile",
    },
    ru: {
        "cookie-accept__heading": "Привет! Кстати, мы используем файлы cookie.",
        "cookie-accept__text-1": "Файлы cookie используются для доступа и хранения информации на вашем устройстве, поэтому мы предлагаем персонализированный контент на основе ваших данных.",
        "cookie-accept__text-2": "Выбирая «Я согласен», вы соглашаетесь на использование нами файлов cookie. Вы можете отказаться\n" +
            " или отозвать согласие, выбрав \"Управление настройками\".",
        "cookie-accept__button": "Я согласен",
        "cookie-accept__manage-settings": "Управление настройками",
        "cookie-settings__heading": "Управление файлами cookie",
        "cookie-settings__intro": "Здесь вы можете управлять настройками файлов cookie:",
        "cookie-settings__subheading1": "Основные файлы cookie",
        "cookie-settings__description1": "Основные файлы cookie или строго необходимые файлы cookie — это файлы cookie, которые необходимы для правильной работы веб-сайта. Это файлы cookie, которые необходимы для предоставления онлайн-услуг на веб-сайте или используются исключительно для выполнения или облегчения передачи связь по сети.",
        "cookie-settings__subheading2": "Файлы cookie производительности",
        "cookie-settings__description2": "Производительные файлы cookie собирают данные о взаимодействии пользователей на веб-сайте. Их называют аналитическими файлами cookie. Они служат для отслеживания просмотров страниц, измерения продолжительности взаимодействия с пользователем, выявления ошибок на неработающих страницах, а также для мониторинга показателей отказов и время загрузки сайта.",
        "cookie-settings__subheading3": "Рекламные файлы cookie",
        "cookie-settings__description3": "Рекламные файлы cookie собирают информацию с вашего устройства, чтобы показывать рекламу, соответствующую вашим интересам. Эти файлы cookie устанавливаются рекламодателями с разрешения владельца веб-сайта, чтобы гарантировать, что реклама, которую вы видите, актуальна для вас.",
        "cookie-settings__preference-button": "Сохранить настройки",
        "cookie-settings__policy-link": "Политика использования файлов cookie",
    },
    sv: {
        "cookie-accept__heading": "Hej! Vi använder cookies förresten.",
        "cookie-accept__text-1": "Cookies används för att komma åt och lagra information på din enhet så att vi erbjuder personligt innehåll baserat på dina data.",
        "cookie-accept__text-2": "Genom att välja \"Jag godkänner\", samtycker du till vår användning av cookies. Du kan vägra\n" +
            " eller återkalla samtycke genom att välja \"Hantera inställningar\".",
        "cookie-accept__button": "Jag håller med",
        "cookie-accept__manage-settings": "Hantera inställningar",
        "cookie-settings__heading": "Cookiehantering",
        "cookie-settings__intro": "Här kan du hantera dina cookie-inställningar:",
        "cookie-settings__subheading1": "Nödvändiga cookies",
        "cookie-settings__description1": "Nödvändiga cookies eller absolut nödvändiga cookies är cookies som är nödvändiga för att en webbplats ska fungera korrekt. Dessa är cookies som är nödvändiga för att tillhandahålla en onlinetjänst på en webbplats eller används enbart för att utföra eller underlätta överföring av kommunikation över ett nätverk.",
        "cookie-settings__subheading2": "Prestationscookies",
        "cookie-settings__description2": "Prestanda-cookies samlar in data om användarinteraktioner på en webbplats. Kallas analytiska cookies, de tjänar till att spåra sidvisningar, mäta varaktigheten av användarens engagemang, identifiera fel på felaktiga sidor och övervaka både avvisningsfrekvenser och sidans laddningstider.",
        "cookie-settings__subheading3": "Reklamcookies",
        "cookie-settings__description3": "Annonscookies samlar in information från din enhet för att visa annonser som matchar dina intressen. Dessa cookies ställs in av annonsörer med webbplatsägarens tillåtelse för att säkerställa att annonserna du ser är relevanta för dig.",
        "cookie-settings__preference-button": "Spara inställningar",
        "cookie-settings__policy-link": "Cookiepolicy",
    },
    sk: {
        "cookie-accept__heading": "Hej! Mimochodom, používame cookies.",
        "cookie-accept__text-1": "Súbory cookie sa používajú na prístup k informáciám na vašom zariadení a ich ukladanie, aby sme vám mohli ponúknuť prispôsobený obsah založený na vašich údajoch.",
        "cookie-accept__text-2": "Výberom možnosti \"Súhlasím\" súhlasíte s naším používaním súborov cookie. Môžete odmietnuť\n" +
            " alebo zrušte súhlas výberom položky \"Spravovať nastavenia\".",
        "cookie-accept__button": "Súhlasím",
        "cookie-accept__manage-settings": "Spravovať nastavenia",
        "cookie-settings__heading": "Správa súborov cookie",
        "cookie-settings__intro": "Tu môžete spravovať svoje preferencie súborov cookie:",
        "cookie-settings__subheading1": "Základné súbory cookie",
        "cookie-settings__description1": "Nevyhnutné súbory cookie alebo nevyhnutne potrebné súbory cookie sú súbory cookie, ktoré sú nevyhnutné na správne fungovanie webovej lokality. Sú to súbory cookie, ktoré sú potrebné na poskytovanie online služby na webovej lokalite alebo sa používajú výlučne na vykonávanie alebo uľahčenie prenosu komunikácia cez sieť.",
        "cookie-settings__subheading2": "Súbory cookie na zvýšenie výkonu",
        "cookie-settings__description2": "Súbory cookie výkonnosti zhromažďujú údaje o interakciách používateľov v rámci webovej lokality. Nazývajú sa aj analytické súbory cookie a slúžia na sledovanie zobrazení stránky, meranie trvania interakcie používateľa, identifikáciu chýb na nefunkčných stránkach a sledovanie miery odchodov a časy načítania stránky.",
        "cookie-settings__subheading3": "Reklamné súbory cookie",
        "cookie-settings__description3": "Reklamné súbory cookie zhromažďujú informácie z vášho zariadenia na zobrazovanie reklám, ktoré zodpovedajú vašim záujmom. Tieto súbory cookie nastavujú inzerenti so súhlasom vlastníka webových stránok, aby zabezpečili, že reklamy, ktoré sa vám zobrazujú, sú pre vás relevantné.",
        "cookie-settings__preference-button": "Uložiť predvoľby",
        "cookie-settings__policy-link": "Zásady používania súborov cookie",
    },
    tr: {
        "cookie-accept__heading": "Merhaba! Bu arada çerez kullanıyoruz.",
        "cookie-accept__text-1": "Çerezler, verilerinize dayalı olarak kişiselleştirilmiş içerik sunabilmemiz için cihazınızdaki bilgilere erişmek ve bilgileri depolamak için kullanılır.",
        "cookie-accept__text-2": "\"Kabul ediyorum\"u seçerek çerez kullanmamıza izin vermiş olursunuz. Reddetebilirsiniz\n" +
            " veya \"Ayarları yönet\"i seçerek onayı geri alın.",
        "cookie-accept__button": "Kabul ediyorum",
        "cookie-accept__manage-settings": "Ayarları yönet",
        "cookie-settings__heading": "Çerez Yönetimi",
        "cookie-settings__intro": "Buradan çerez tercihlerinizi yönetebilirsiniz:",
        "cookie-settings__subheading1": "Temel Çerezler",
        "cookie-settings__description1": "Temel çerezler veya kesinlikle gerekli çerezler, bir web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bunlar, bir web sitesinde çevrimiçi bir hizmet sağlamak için gerekli olan veya yalnızca aktarımı gerçekleştirmek veya kolaylaştırmak için kullanılan çerezlerdir. bir ağ üzerinden iletişim.",
        "cookie-settings__subheading2": "Performans Çerezleri",
        "cookie-settings__description2": "Performans çerezleri, bir web sitesi içindeki kullanıcı etkileşimleri hakkında veri toplar. Analiz çerezleri olarak anılırlar, sayfa görüntülemelerini izlemeye, kullanıcı etkileşiminin süresini ölçmeye, arızalı sayfalardaki hataları tespit etmeye ve hem hemen çıkma oranlarını hem de izlemeyi izlemeye yararlar. site yükleme süreleri.",
        "cookie-settings__subheading3": "Reklam Çerezleri",
        "cookie-settings__description3": "Reklam çerezleri, ilgi alanlarınıza uygun reklamlar göstermek için cihazınızdan bilgi toplar. Bu çerezler, gördüğünüz reklamların sizinle alakalı olmasını sağlamak için reklamverenler tarafından web sitesi sahibinin izniyle ayarlanır.",
        "cookie-settings__preference-button": "Tercihleri kaydet",
        "cookie-settings__policy-link": "Çerez Politikası",
    },
    ua: {
        "cookie-accept__heading": "Гей! До речі, ми використовуємо файли cookie.",
        "cookie-accept__text-1": "Файли cookie використовуються для доступу та зберігання інформації на вашому пристрої, щоб ми пропонували персоналізований вміст на основі ваших даних.",
        "cookie-accept__text-2": "Вибираючи \"Я згоден\", ви погоджуєтеся на використання файлів cookie. Ви можете відмовитися\n" +
            " або відкликайте згоду, вибравши \"Керувати налаштуваннями\".",
        "cookie-accept__button": "Я згоден",
        "cookie-accept__manage-settings": "Керувати налаштуваннями",
        "cookie-settings__heading": "Керування файлами cookie",
        "cookie-settings__intro": "Тут ви можете керувати налаштуваннями файлів cookie:",
        "cookie-settings__subheading1": "Основні файли cookie",
        "cookie-settings__description1": "Основні файли cookie або суворо необхідні файли cookie — це файли cookie, необхідні для правильного функціонування веб-сайту. Це файли cookie, які необхідні для надання онлайн-сервісу на веб-сайті або використовуються виключно для виконання або полегшення передачі спілкування через мережу.",
        "cookie-settings__subheading2": "Ефективні файли cookie",
        "cookie-settings__description2": "Ефективні файли cookie збирають дані про взаємодію користувачів на веб-сайті. Називаються аналітичними файлами cookie, вони служать для відстеження переглядів сторінок, вимірювання тривалості взаємодії користувачів, виявлення помилок на несправних сторінках і моніторингу показників відмов і час завантаження сайту.",
        "cookie-settings__subheading3": "Рекламні файли cookie",
        "cookie-settings__description3": "Рекламні файли cookie збирають інформацію з вашого пристрою, щоб показувати рекламу, яка відповідає вашим інтересам. Ці файли cookie встановлюються рекламодавцями з дозволу власника веб-сайту, щоб гарантувати, що реклама, яку ви бачите, відповідає вам.",
        "cookie-settings__preference-button": "Зберегти налаштування",
        "cookie-settings__policy-link": "Політика щодо файлів cookie",
    },
    vi: {
        "cookie-accept__heading": "Này! Nhân tiện, chúng tôi đang sử dụng cookie.",
        "cookie-accept__text-1": "Cookie được sử dụng để truy cập và lưu trữ thông tin trên thiết bị của bạn để chúng tôi cung cấp nội dung được cá nhân hóa dựa trên dữ liệu của bạn.",
        "cookie-accept__text-2": "Bằng cách chọn \"Tôi đồng ý\", bạn đồng ý cho chúng tôi sử dụng cookie. Bạn có thể từ chối\n" +
            " hoặc rút lại sự đồng ý bằng cách chọn \"Quản lý cài đặt\".",
        "cookie-accept__button": "Tôi đồng ý",
        "cookie-accept__manage-settings": "Quản lý cài đặt",
        "cookie-settings__heading": "Quản lý cookie",
        "cookie-settings__intro": "Tại đây bạn có thể quản lý các tùy chọn cookie của mình:",
        "cookie-settings__subheading1": "Cookie cần thiết",
        "cookie-settings__description1": "Cookie thiết yếu hoặc cookie thực sự cần thiết là những cookie cần thiết để trang web hoạt động chính xác. Đây là những cookie cần thiết để cung cấp dịch vụ trực tuyến trên trang web hoặc chỉ được sử dụng để thực hiện hoặc hỗ trợ việc truyền tải thông tin truyền thông qua mạng.",
        "cookie-settings__subheading2": "Cookie hiệu suất",
        "cookie-settings__description2": "Cookie hiệu suất thu thập dữ liệu về tương tác của người dùng trong một trang web. Được gọi là cookie phân tích, chúng phục vụ để theo dõi lượt xem trang, đo lường thời lượng tương tác của người dùng, xác định lỗi trên các trang bị trục trặc và theo dõi cả tỷ lệ thoát và thời gian tải trang web.",
        "cookie-settings__subheading3": "Cookie quảng cáo",
        "cookie-settings__description3": "Cookie quảng cáo thu thập thông tin từ thiết bị của bạn để hiển thị quảng cáo phù hợp với sở thích của bạn. Những cookie này được nhà quảng cáo đặt với sự cho phép của chủ sở hữu trang web để đảm bảo quảng cáo bạn nhìn thấy có liên quan đến bạn.",
        "cookie-settings__preference-button": "Lưu tùy chọn",
        "cookie-settings__policy-link": "Chính sách cookie",
    }
}

class CookieManager {
    constructor() {}

    /**
     * Sets a cookie.
     * @param {string} name - Cookie's name.
     * @param {string} value - Cookie's value.
     * @param {number} days - Expiration date.
     */
    set(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    /**
     * Gets a cookie by name.
     * @param {string} name - Cookie's name to find.
     * @return {string|null} - Cookie's value or null.
     */
    get(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    /**
     * Removes a cookie by name.
     * @param {string} name - Cookie's name to remove.
     */
    remove(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

const cookieManager = new CookieManager();

/**
 * Represents a cookie banner.
 * @constructor
 * @param {string} language - 2-letter language/country code of the cookie banner's text
 * @param {string} banner = a relative link to the banner image
 * @param {string} policy = a relative link to the policy file
 * @description Initializes a cookie banner in the DOM depending on the set language, banner, and policy.
 */
class OnCookies {
    constructor({language, banner, policy}) {
        this.language = language;
        this.banner = banner;
        this.policy = policy;
        this.cookieIcon = this.createCookieIcon();
        this.dialog = this.createBanner();
        this.initialize();
    }

    /**
     * @description Initializes cookie banner and all required actions in the right order.
     * */
    initialize() {
        document.body.appendChild(this.dialog);
        document.body.appendChild(this.cookieIcon);
        this.setupEventListeners();
        this.setupObserver();
        this.checkResetRequest();
        this.showBannerOnFirstView();
    }

    /**
     * @description Removes all set cookies.
     * */
    checkResetRequest() {
        const urlParams = new URLSearchParams(window.location.search);
        const resetTrigger = urlParams.get("reset");
        if (resetTrigger === "true") {
            console.log("Cookies were reset");
            cookieManager.remove("_cookies_accepted")
            cookieManager.remove("_cookie_preference")
            cookieManager.remove("essential_cookie")
            cookieManager.remove("performance_cookie")
            cookieManager.remove("advertising_cookie")
            cookieManager.remove("_usertype")
            cookieManager.remove("_usertoken")
        }
    }

    /**
     * @description Checks if cookies were already accepted. If not, the cookie banner appears.
     * */
    showBannerOnFirstView() {
        if (!cookieManager.get("_cookies_accepted")) {
            this.showModal();
        } else {
            this.cookieIcon.classList.remove("ont-hidden");
        }
    }


    /**
     * @param {HTMLElement} element = HTMLElement for which to replace the text
     * @param {string} text - target text
     * @description sets the element's text
     * */
    setTextContent(element, text) {
        return element.innerText = text;
    }

    /**
     * @param {HTMLElement} element = HTMLElement for which to replace the text
     * @param {string} text - target text
     * @description sets the element's text
     * */
    setHyperlinkDestination(element, destination) {
        return element.href = destination;
    }

    createBanner() {
        if (this.language.length !== 2) throw new Error("Incorrect language format! Should be 2-letter ISO country code: https://countrycode.org")
        if (!(this.language in languageDictionary)) throw new Error("This language is not supported. Here is the list of country codes: " + Object.keys(languageDictionary))
        const texts = languageDictionary[this.language];


        const dialog = document.createElement('dialog');
        dialog.id = 'cookie-banner';
        dialog.className = 'ont-rounded-xl ont-border ont-border-neutral-300 ont-overflow-hidden ont-flex ont-flex-col ont-items-center ont-justify-center ont-gap-4 ont-max-w-[300px] sm:ont-max-w-[400px] ont-shadow-2xl ont-opacity-0 ont-transition-opacity ont-duration-700 ont-hidden';
        if (this.language === 'he' || this.language === 'ar') {
            dialog.dir = "rtl"
        }

        const cookieAccept = document.createElement('div');
        cookieAccept.id = 'cookie-accept';
        cookieAccept.className = 'ont-flex ont-flex-col ont-items-center ont-justify-center';

        const img = document.createElement('img');
        img.src = this.banner;
        img.alt = 'cookies banner';
        img.className = 'ont-block ont-max-h-[300px] ont-w-full ont-object-cover ont-border-b ont-border-neutral-300';
        cookieAccept.appendChild(img);

        const textContainer = document.createElement('div');
        textContainer.className = 'ont-flex ont-flex-col ont-p-4 ont-gap-1';

        const acceptHeading = document.createElement('h2');
        acceptHeading.className = 'ont-font-medium ont-text-lg ont-text-center';
        acceptHeading.id = 'cookie-accept__heading';
        this.setTextContent(acceptHeading, texts[acceptHeading.id]);

        const acceptText1 = document.createElement('p');
        acceptText1.className = 'ont-text-sm ont-text-neutral-500';
        acceptText1.id = 'cookie-accept__text-1';
        this.setTextContent(acceptText1, texts[acceptText1.id]);

        const acceptText2 = document.createElement('p');
        acceptText2.className = 'ont-text-sm ont-text-neutral-500';
        acceptText2.id = 'cookie-accept__text-2';
        this.setTextContent(acceptText2, texts[acceptText2.id]);

        const agreeButton = document.createElement('button');
        agreeButton.type = 'button';
        agreeButton.id = 'cookie-accept__button';
        agreeButton.className = 'ont-mx-auto ont-flex ont-items-center ont-justify-center ont-uppercase ont-font-mono ont-font-bold ont-tracking-wider ont-w-1/2 ont-text-center ont-py-2 ont-mt-4 ont-rounded-3xl ont-bg-blue-600 ont-text-white ont-border-2 ont-border-blue-700 hover:ont-bg-blue-700 ont-transition-all ont-duration-300 hover:ont-shadow-xl';
        this.setTextContent(agreeButton, texts[agreeButton.id]);

        const manageSettings = document.createElement('sm');
        manageSettings.id = 'cookie-accept__manage-settings';
        manageSettings.className = 'ont-text-center ont-text-sm ont-text-neutral-500 ont-font-medium ont-py-2 ont-cursor-pointer hover:ont-text-neutral-700 ont-transition-all ont-duration-300';
        manageSettings.onclick = this.showCookieSettings.bind(this);
        this.setTextContent(manageSettings, texts[manageSettings.id]);

        textContainer.appendChild(acceptHeading);
        textContainer.appendChild(acceptText1);
        textContainer.appendChild(acceptText2);
        textContainer.appendChild(agreeButton);
        textContainer.appendChild(manageSettings);

        cookieAccept.appendChild(textContainer);

        dialog.appendChild(cookieAccept);

        const cookieSettings = document.createElement('div');
        cookieSettings.id = 'cookie-settings';
        cookieSettings.className = 'ont-hidden ont-p-4 ont-flex-col ont-justify-center ont-gap-2';

        const settingsHeading = document.createElement('h2');
        settingsHeading.className = 'ont-font-medium ont-text-3xl ont-tracking-wide';
        settingsHeading.id = 'cookie-settings__heading';
        this.setTextContent(settingsHeading, texts[settingsHeading.id]);
        cookieSettings.appendChild(settingsHeading);

        const settingsIntro = document.createElement("p");
        settingsIntro.className = "ont-my-4";
        settingsIntro.id = "cookie-settings__intro";
        this.setTextContent(settingsIntro, texts[settingsIntro.id]);
        cookieSettings.append(settingsIntro);

        const essentialCookies = this.createCookieCategory('Essential Cookies', texts["cookie-settings__description1"], 1);
        cookieSettings.appendChild(essentialCookies);

        const performanceCookies = this.createCookieCategory('Performance Cookies', texts["cookie-settings__description2"], 2);
        cookieSettings.appendChild(performanceCookies);

        const advertisingCookies = this.createCookieCategory('Advertising Cookies', texts["cookie-settings__description3"], 3);
        cookieSettings.appendChild(advertisingCookies);

        const savePreferencesButton = document.createElement('button');
        savePreferencesButton.type = 'button';
        savePreferencesButton.id = 'cookie-settings__preference-button';
        savePreferencesButton.className = 'ont-flex ont-w-fit ont-items-start ont-py-3 ont-font-medium ont-transition-all ont-duration-300 ont-bg-blue-600 ont-text-white ont-px-2 ont-rounded-xl hover:ont-brightness-75';
        savePreferencesButton.onclick = this.savePreferences;
        this.setTextContent(savePreferencesButton, texts[savePreferencesButton.id]);

        const policyLink = document.createElement('a');
        policyLink.id = 'cookie-settings__policy-link';
        this.setHyperlinkDestination(policyLink, this.policy);
        policyLink.className = 'ont-text-sm ont-text-neutral-500 ont-font-medium hover:ont-text-neutral-700 ont-transition-all ont-duration-300';
        this.setTextContent(policyLink, texts[policyLink.id]);
        const preferencesContainer = document.createElement('div');
        preferencesContainer.className = 'ont-flex ont-items-center ont-justify-between ont-w-full';
        preferencesContainer.appendChild(savePreferencesButton);
        preferencesContainer.appendChild(policyLink);

        cookieSettings.appendChild(preferencesContainer);
        dialog.appendChild(cookieSettings);

        return dialog;
    }

    /**
     * @description Creates a cookie icon and appends it to the document.
     * */
    createCookieIcon() {
        const cookieIcon = document.createElement("div");
        cookieIcon.id = "cookie-preference-icon";
        cookieIcon.className = "ont-flex ont-hidden ont-items-center ont-justify-center ont-h-12 ont-w-12 ont-fixed ont-bottom-[3%] ont-left-[3%] ont-rounded-full ont-bg-white ont-border ont-border-slate-300 hover:ont-bg-blue-200 ont-group hover:ont-border-blue-300 ont-transition-all ont-duration-300 ont-z-[9999px]";

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.classList.add = "lucide lucide-cookie ont-stroke-blue-600 group-hover:ont-stroke-blue-800";

        const paths = [
            "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
            "M8.5 8.5v.01",
            "M16 15.5v.01",
            "M12 12v.01",
            "M11 17v.01",
            "M7 14v.01"
        ];

        paths.forEach(d => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            svg.appendChild(path);
        });

        cookieIcon.appendChild(svg);

        return cookieIcon;
    }

    /**
     * @param {string} title = Cookie Category
     * @param {string} description - Description of the cookie category
     * @description Creates cookie categories in the DOM as custom HTML
     * */
    createCookieCategory(title, description, idSuffix) {
        const categoryContainer = document.createElement("div");
        categoryContainer.className = "ont-flex ont-items-center ont-justify-between ont-gap-2";

        const details = document.createElement('details');
        details.className = '[&_svg]:open:ont--rotate-180 ont-transition-all ont-duration-300 ont-w-full';
        categoryContainer.appendChild(details);

        const summary = document.createElement('summary');
        summary.className = 'ont-flex ont-items-center ont-justify-between ont-w-full ont-cursor-pointer ont-list-none ont-text-sm ont-leading-6 ont-text-slate-900 ont-font-semibold ont-select-none';
        details.appendChild(summary);

        const summaryContent = document.createElement('div');
        summaryContent.className = 'ont-flex ont-items-center ont-justify-center ont-gap-4';
        summaryContent.id = `cookie-settings__subheading${idSuffix}`;
        summary.appendChild(summaryContent);

        this.setTextContent(summaryContent, title);

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'ont-rotate-0 ont-transform ont-text-blue-700 ont-transition-all ont-duration-500');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('height', '20');
        svg.setAttribute('width', '20');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('stroke-width', '2');
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', '6 9 12 15 18 9');
        svg.appendChild(polyline);
        summaryContent.appendChild(svg);

        const label = document.createElement('label');
        label.className = 'ont-inline-flex ont-relative ont-items-center ont-cursor-pointer';
        summary.appendChild(label);

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggleCookies${idSuffix}`;
        if (idSuffix === 1) input.checked = true; // Include essential cookies by default
        input.className = 'ont-sr-only ont-peer';
        label.appendChild(input);

        const slider = document.createElement('div');
        slider.className = 'ont-w-11 ont-h-6 ont-bg-gray-200 ont-rounded-full peer peer-focus:ont-ring-4 peer-focus:ont-ring-blue-300 dark:peer-focus:ont-ring-blue-800 peer-checked:after:ont-translate-x-full peer-checked:after:ont-border-white after:ont-content-[""] after:ont-absolute after:ont-top-[2px] after:ont-left-[2px] after:ont-bg-white after:ont-border-gray-300 after:ont-border after:ont-rounded-full after:ont-h-5 after:ont-w-5 after:ont-transition-all dark:ont-border-gray-600 peer-checked:ont-bg-blue-600 ont-duration-300';
        label.appendChild(slider);

        const desc = document.createElement('p');
        desc.className = 'ont-text-sm ont-text-slate-600 ont-leading-6 ont-mt-2';
        desc.id = `cookie-settings__description${idSuffix}`;
        this.setTextContent(desc, description);
        details.appendChild(desc);

        return categoryContainer;
    }

    /**
     * @description Checks user preferences and sets corresponding cookie preferences.
     * */
    savePreferences() {
        const areEssentialCookiesAllowed = document.getElementById("toggleCookies1").checked === true;
        const arePerformanceCookiesAllowed = document.getElementById("toggleCookies2").checked === true;
        const areAdvertisingCookiesAllowed = document.getElementById("toggleCookies3").checked === true;

        updateCookiePreferences(areEssentialCookiesAllowed, arePerformanceCookiesAllowed, areAdvertisingCookiesAllowed);
        document.getElementById("cookie-preference-icon").classList.remove("hidden");

        if (this.dialog) {
            this.closeModal();

        }
    }

    /**
     * @description Sets up all required event listeners for buttons and controls.
     * */
    setupEventListeners() {
        const acceptBtn = this.dialog.querySelector('#cookie-accept__button');
        const manageSettingsBtn = this.dialog.querySelector('#cookie-accept__manage-settings');
        const savePreferencesBtn = this.dialog.querySelector('#cookie-settings__preference-button');

        acceptBtn.addEventListener('click', () => this.handleAcceptClick());
        manageSettingsBtn.addEventListener('click', () => this.showCookieSettings());
        savePreferencesBtn.addEventListener('click', () => this.savePreferences());

        this.cookieIcon.addEventListener("click", () => this.showModal())
    }

    /**
     * @description Handles click of the "I Accept" button so that cookies are marked as allowed.
     * @description After clicking the button, cookies modal no longer appears for the user.
     * @description Instead, users see the cookie icon for managing their cookie preferences at the corner of the page.
     * */
    handleAcceptClick() {
        setCookie("_cookies_accepted", "true", 1);
        this.closeModal();
        this.cookieIcon.classList.remove("ont-hidden");
    }

    /**
     * @description Opens the "Cookie settings" of the cookie banner, and then makes it visible.
     */
    showCookieSettings() {
        const cookieAcceptElement = document.getElementById("cookie-accept");
        cookieAcceptElement.classList.add("ont-hidden");

        const cookieSettings = document.getElementById("cookie-settings");

        cookieSettings.classList.remove("ont-hidden");
        cookieSettings.classList.add("ont-flex");

        this.dialog.showModal();
        this.dialog.classList.remove("ont-hidden");
    }

    /**
     * @description Makes the cookie banner visible.
     */
    showModal() {
        this.dialog.showModal();
        this.dialog.classList.remove("ont-hidden");
    }

    /**
     * @description Closes and hides the cookie banner.
     */
    closeModal() {
        this.dialog.close();
        this.dialog.classList.add("ont-hidden");
    }

    /**
     * @description Adds soft animation for showing cookie banner when it's on the screen.
     */
    setupObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.dialog.classList.remove('ont-opacity-0');
                    this.dialog.classList.add('ont-opacity-100');
                } else {
                    this.dialog.classList.remove('ont-opacity-100');
                    this.dialog.classList.add('ont-opacity-0');
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(this.dialog);
    }
}

/**
 * @description Encodes object into a base64 string
 * @param {Object} data - any object data to tokenize
 * @return {string} a combined base64 string with a signature.
 */
function encodeData(data) {
    const base64Payload = btoa(JSON.stringify(data));
    const signature = window.location.host;
    return `${base64Payload}.${signature}`;
}

/**
 * @description Decodes base64 string
 * @param {string} - Base-64 encoded ASCII string
 * @return {string} - decoded string
 * */
function decodeData(token) {
    return atob(token);
}

/**
 * @description Creates unique user token
 * @param {string} - Base-64 encoded ASCII string
 * @return {string} - decoded string
 * */
function setCookie(name, value, ttl) {
    cookieManager.set(name, value, ttl)
}


/**
 * @description Gets the user type
 *
 * @returns {string | null} - string representing the user type
 */
function getUserType() {
    return cookieManager.get("_userType")
}


/**
 * Updates cookie preferences based on user input
 *
 * @param {string[]} cookiePreference = array of cookie preferences
 * @param {string} prefName - cookie type: essential/performance/advertising
 * @param {boolean} isActive - true/false of whether the user allowed a cookie type
 * @param {*} cookieName - cookie's name
 * @param {*} dummyData - cookie's value
 */
function updatePreference(cookiePreference, prefName, isActive, cookieName, dummyData) {
    if (!COOKIE_TYPES.includes(prefName)) throw new Error("Unsupported cookie type!");
    
    const index = cookiePreference.indexOf(prefName);
    if (isActive) {
        if (index === -1) {
            cookiePreference.push(prefName);
        }
        setCookie(cookieName, dummyData, 0.5); // half a day
    } else {
        if (index > -1) {
            cookiePreference.splice(index, 1);
        }
        cookieManager.remove(cookieName); // Remove the cookie
    }
}


/**
 * @description Updates cookie preferences based on user selection
 *
 * @param {boolean} essential Essential cookies flag (true/false)
 * @param {boolean} performance Performance cookies flag (true/false)
 * @param {boolean} advertising Advertising cookies flag (true/false)
 */
function updateCookiePreferences(essential, performance, advertising) {
    cookieManager.remove("_cookie_preference");

    const cookiePreference = []

    // Update cookie preferences for each type
    updatePreference(cookiePreference, "essential", essential, "essential_cookie", "dummy_data");
    updatePreference(cookiePreference, "performance", performance, "performance_cookie", "dummy_data");
    updatePreference(cookiePreference, "advertising", advertising, "advertising_cookie", "dummy_data");

    // Save updated preference
    setCookie("_cookie_preference", cookiePreference.join(", "), 1);

    // Set cookies as allowed
    setCookie("_cookies_accepted", "true", 1);
}

const currentUserType = cookieManager.get("_usertype");

if (!getUserType()) {
    setCookie("_usertype", "visitor", 0.1);
}

const PAYLOAD_DATA = {
    user_type: cookieManager.get("_usertype")
}

const token = encodeData(PAYLOAD_DATA);
setCookie("_usertoken", token, 0.1); // 10% of the 24 hours (1 = day)