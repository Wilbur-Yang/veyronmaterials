const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll(".hero-dots button"));
const nextButton = document.querySelector(".hero-arrow");
const heroTitle = document.querySelector("[data-hero-title]");
const heroSubtitle = document.querySelector("[data-hero-subtitle]");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const siteHeader = document.querySelector(".site-header");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const productSelect = document.querySelector("#product-interest");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");
const formButtons = contactForm ? Array.from(contactForm.querySelectorAll("button[type='submit']")) : [];
const inquiryEmail = "sales@veyronmaterials.com";

const heroSlides = {
  en: [
    {
      title: "PBAT materials and biodegradable packaging for overseas B2B supply.",
      subtitle:
        "Discuss PBAT modified material, blown film, mulch film, mailer bags and compostable packaging with samples, customization and MOQ planning.",
    },
    {
      title: "PBAT modified material for film, bags and biodegradable products.",
      subtitle:
        "Review material grade, application, sample needs, packaging format and certification questions for qualified raw-material inquiries.",
    },
    {
      title: "Biodegradable blown film, mulch film and converted packaging options.",
      subtitle:
        "Discuss film width, thickness, winding, color, packing and downstream conversion for bags, mailers and agricultural film projects.",
    },
    {
      title: "Compostable takeout boxes and packaging for food-service projects.",
      subtitle:
        "Support wholesale, private label and custom packaging discussions based on application, market, quantity and order plan.",
    },
    {
      title: "A practical first contact for samples, MOQ and specification review.",
      subtitle:
        "Send product category, destination market and target quantity so the supply team can respond with suitable product and material information.",
    },
  ],
  zh: [
    {
      title: "面向海外 B2B 供应的 PBAT 材料与可降解包装。",
      subtitle:
        "围绕 PBAT 改性材料、吹膜、地膜、快递袋和可堆肥包装，沟通样品、定制和 MOQ 计划。",
    },
    {
      title: "用于薄膜、袋类和可降解制品生产的 PBAT 改性材料。",
      subtitle:
        "合格原料询盘可沟通材料牌号、应用场景、样品需求、包装方式以及认证相关问题。",
    },
    {
      title: "可降解吹膜、地膜和下游包装产品选项。",
      subtitle:
        "可围绕膜宽、厚度、收卷、颜色、包装和下游制袋、快递袋、农业地膜项目进行规格讨论。",
    },
    {
      title: "面向餐饮外卖项目的可堆肥餐盒与包装。",
      subtitle:
        "根据应用场景、目标市场、数量和订单计划，支持批发、私标和定制包装需求沟通。",
    },
    {
      title: "用于样品、MOQ 和规格评估的第一阶段供应沟通入口。",
      subtitle:
        "发送产品类别、目的地市场和目标数量，供应团队可回复合适的产品与材料信息。",
    },
  ],
};

const translations = {
  en: {
    "nav.products": "Products",
    "nav.why": "Why Veyron",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.quote": "Request Quote",
    "hero.eyebrow": "PBAT materials and biodegradable packaging",
    "hero.primary": "Send Inquiry",
    "hero.secondary": "View Product Range",
    "hero.stat1Label": "Product Scope",
    "hero.stat1Value": "PBAT material, film, bags and food packaging",
    "hero.stat2Label": "B2B Support",
    "hero.stat2Value": "Samples, MOQ and customization discussion",
    "hero.stat3Label": "Markets",
    "hero.stat3Value": "Australia and overseas inquiries",
    "buyer.title": "Suitable for",
    "buyer.text": "Packaging brands, distributors, wholesalers, importers, e-commerce packaging teams, and eco-packaging companies.",
    "buyer.cta": "Send product specs for quotation",
    "products.kicker": "Product Catalog",
    "products.title": "Start with materials, film, or converted packaging.",
    "products.intro": "Choose PBAT masterbatch, biodegradable blown film, mulch film, mailers, garbage bags, flexible bags or compostable takeout boxes. Specifications, MOQ and samples are confirmed by inquiry.",
    "products.detailsNote": "Product Details: material, common sizes, color options, packaging options, MOQ, customization and applications.",
    "spec.material": "Material",
    "spec.sizes": "Common Sizes",
    "spec.colors": "Color Options",
    "spec.packaging": "Packaging Options",
    "spec.moq": "MOQ",
    "spec.price": "Reference Price",
    "spec.customization": "Customization",
    "spec.applications": "Applications",
    "spec.customSizes": "Custom sizes available",
    "spec.packagingValue": "Wholesale, retail or private label packaging",
    "spec.moqValue": "Depends on product type and specifications",
    "product.colors": "White, natural, black, green or custom color",
    "product.quote": "Request a Quote",
    "product.mailers.type": "Packaging Bags",
    "product.mailers.title": "Biodegradable Mailer Bags",
    "product.mailers.material": "Biodegradable resin blend, specification confirmed by inquiry",
    "product.mailers.custom": "Size, thickness, printing and packing can be discussed",
    "product.mailers.apps": "E-commerce parcels, courier packaging, document mailers",
    "product.garbage.type": "Household & Commercial Bags",
    "product.garbage.title": "Biodegradable Garbage Bags",
    "product.garbage.material": "Biodegradable bag-grade material, specification confirmed by inquiry",
    "product.garbage.colors": "Yellow, green, black or custom color",
    "product.garbage.custom": "Roll packing, folded packing, thickness and color can be discussed",
    "product.garbage.apps": "Household, office, retail and light commercial waste collection",
    "product.flexible.type": "Flexible Packaging",
    "product.flexible.title": "Flexible Packaging Bags",
    "product.flexible.material": "Biodegradable flexible packaging material, final structure by application",
    "product.flexible.custom": "Bag type, size, thickness and packaging can be adjusted",
    "product.flexible.apps": "Shopping bags, retail packaging, food-service bags and carry bags",
    "product.mulch.title": "Biodegradable Mulch Film",
    "product.mulch.apps": "Agricultural soil covering, crop protection and field planting support",
    "product.pbat.type": "Industrial Raw Material",
    "product.pbat.title": "PBAT Modified Material / Masterbatch",
    "product.pbat.material": "PBAT-based modified material for biodegradable product applications",
    "product.pbat.sizes": "Pellet material; grade and packaging confirmed by inquiry",
    "product.pbat.colors": "Natural or customized according to formulation",
    "product.pbat.packaging": "Industrial bag or pallet packing can be discussed",
    "product.pbat.price": "PBAT masterbatch / modified pellet material: RMB 9,800 per metric ton; final grade and packing confirmed by inquiry.",
    "product.pbat.custom": "Formulation and processing requirements can be reviewed",
    "product.pbat.apps": "Film, bags, compounds and biodegradable product production",
    "product.blown.type": "Film Products",
    "product.blown.title": "Biodegradable Blown Film",
    "product.blown.material": "PBAT-based biodegradable blown film material, final formula confirmed by application",
    "product.blown.sizes": "Film roll width, thickness and winding format confirmed by inquiry",
    "product.blown.colors": "Transparent, natural, white or custom tint by project",
    "product.blown.packaging": "Roll film, carton or pallet packing can be discussed",
    "product.blown.custom": "Film thickness, width, winding, color and formulation can be reviewed",
    "product.blown.apps": "Bag making, flexible packaging film, mailer bags and downstream converted products",
    "product.downstream.type": "Downstream Products",
    "product.downstream.title": "Converted downstream product options",
    "product.downstream.intro": "These products are downstream applications from the material and film supply chain. Details are confirmed by size, thickness, packaging and order plan.",
    "product.takeout.type": "Food-Service Packaging",
    "product.takeout.title": "Compostable Takeout Boxes",
    "product.takeout.material": "Compostable food-service material, specification confirmed by inquiry",
    "product.takeout.sizes": "Rectangular and round formats; custom sizes available",
    "product.takeout.colors": "Natural, white or customized by project",
    "product.takeout.custom": "Size, lid style, carton packing and private label needs can be discussed",
    "product.takeout.apps": "Takeaway, catering, food delivery and eco food packaging",
    "about.kicker": "About Veyron Materials",
    "about.title": "A B2B supply communication partner for PBAT materials and biodegradable packaging.",
    "about.text": "Veyron Materials is the overseas market communication brand of Jiangsu Weiyuan New Material Technology Co., Ltd., focusing on biodegradable plastic products, PBAT modified materials and flexible packaging solutions.",
    "about.supply": "We work with manufacturing and supply chain partners in China to support biodegradable packaging products and PBAT-based material solutions for overseas B2B clients.",
    "about.certification": "Australian certification information can be discussed during qualified inquiries. Exact certificate name, product scope and documents should be confirmed before purchase.",
    "why.kicker": "Why Veyron",
    "why.item1": "Flexible MOQ for early-stage cooperation",
    "why.item2": "Custom sizes, thickness, colors and packaging",
    "why.item3": "Support for sample testing and specification review",
    "why.item4": "Certification details available for qualified inquiries",
    "why.item5": "Suitable for packaging brands, distributors, importers and B2B buyers",
    "faq.kicker": "FAQ",
    "faq.title": "Common questions from B2B buyers.",
    "faq.intro": "Answers are kept practical for first-stage inquiry discussions. Final specifications are confirmed case by case.",
    "faq.q1": "What products do you supply?",
    "faq.a1": "We support PBAT modified material, biodegradable blown film, biodegradable mulch film, mailer bags, garbage bags, flexible packaging bags and compostable takeout boxes.",
    "faq.q2": "Can I request samples?",
    "faq.a2": "Samples can be discussed for qualified B2B inquiries. Availability depends on product type, current stock and project requirements.",
    "faq.q3": "What is your MOQ?",
    "faq.a3": "MOQ depends on product type, size, material, printing, packaging and order plan.",
    "faq.q4": "Can you customise size, thickness, colour or packaging?",
    "faq.a4": "Yes. Custom size, thickness, color, printing and packaging can be discussed according to the product and order plan.",
    "faq.q5": "Can you review certification information?",
    "faq.a5": "Australian certification information can be reviewed during qualified B2B discussions. Exact certificate name, number and covered product scope should be confirmed before an order.",
    "faq.q6": "Do you support private label or OEM packaging?",
    "faq.a6": "Private label and OEM packaging can be reviewed based on product type, artwork, order quantity and packaging requirements.",
    "faq.q7": "Which customers are suitable for cooperation?",
    "faq.a7": "Packaging brands, distributors, wholesalers, importers, e-commerce packaging buyers and eco-packaging companies are suitable for discussion.",
    "contact.kicker": "Contact / Inquiry Form",
    "contact.title": "Send product specs for a B2B quote or sample discussion.",
    "contact.intro": "Include product category, destination market, estimated quantity, size, thickness, printing, packaging and certification needs. We will respond with suitable product and material information.",
    "contact.location": "China supply chain support",
    "contact.markets": "Serving Australian and overseas B2B markets",
    "contact.australia": "Certification details available on request",
    "form.name": "Name",
    "form.company": "Company Name",
    "form.email": "Email",
    "form.country": "Country / Region",
    "form.product": "Product Interested In",
    "form.quantity": "Estimated Quantity",
    "form.custom": "Custom Requirements",
    "form.message": "Message",
    "form.send": "Send Inquiry",
    "form.samples": "Request Samples",
    "form.note": "This form sends your inquiry directly to sales@veyronmaterials.com. If it does not send, email us directly with product, market, quantity and specification details.",
    "form.sending": "Sending inquiry...",
    "form.success": "Inquiry sent. We will reply by email after reviewing your product details.",
    "form.error": "The form could not send right now. Please email sales@veyronmaterials.com directly with product, market, quantity and specification details.",
    "form.productPlaceholder": "Select a product category",
    "form.namePlaceholder": "Your name",
    "form.companyPlaceholder": "Company name",
    "form.emailPlaceholder": "name@company.com",
    "form.countryPlaceholder": "Destination market",
    "form.quantityPlaceholder": "Estimated order quantity",
    "form.customPlaceholder": "Size, thickness, color, printing, packaging, MOQ or sample needs.",
    "form.messagePlaceholder": "Tell us your application, destination market and certification needs.",
    "footer.tagline": "PBAT materials and biodegradable packaging for B2B buyers",
  },
  zh: {
    "nav.products": "产品",
    "nav.why": "为什么选择 Veyron",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "nav.quote": "获取报价",
    "hero.eyebrow": "PBAT 材料与可降解包装",
    "hero.primary": "提交询盘",
    "hero.secondary": "查看产品范围",
    "hero.stat1Label": "产品范围",
    "hero.stat1Value": "PBAT 材料、薄膜、袋类和餐饮包装",
    "hero.stat2Label": "B2B 支持",
    "hero.stat2Value": "样品、MOQ 和定制需求沟通",
    "hero.stat3Label": "市场方向",
    "hero.stat3Value": "支持澳洲及海外市场询盘",
    "buyer.title": "适合客户",
    "buyer.text": "包装品牌、分销商、批发商、进口商、电商包装团队和环保包装公司。",
    "buyer.cta": "发送产品规格获取报价",
    "products.kicker": "产品目录",
    "products.title": "从原料、薄膜或下游包装产品开始沟通。",
    "products.intro": "可选择 PBAT 母粒、可降解吹膜、地膜、快递袋、垃圾袋、柔性包装袋或可堆肥外卖餐盒。规格、MOQ 和样品按询盘确认。",
    "products.detailsNote": "产品详情：材料、常见尺寸、颜色选项、包装方式、MOQ、定制能力和应用场景。",
    "spec.material": "材料",
    "spec.sizes": "常见尺寸",
    "spec.colors": "颜色选项",
    "spec.packaging": "包装方式",
    "spec.moq": "MOQ",
    "spec.price": "参考报价",
    "spec.customization": "定制能力",
    "spec.applications": "应用",
    "spec.customSizes": "支持定制尺寸",
    "spec.packagingValue": "可按批发、零售或私标包装需求调整",
    "spec.moqValue": "根据产品类型和规格确认",
    "product.colors": "白色、本色、黑色、绿色或定制颜色",
    "product.quote": "获取报价",
    "product.mailers.type": "包装袋",
    "product.mailers.title": "可降解快递袋",
    "product.mailers.material": "可降解树脂混合材料，具体规格按询盘确认",
    "product.mailers.custom": "可沟通尺寸、厚度、印刷和包装方式",
    "product.mailers.apps": "电商包裹、快递包装、文件邮寄袋",
    "product.garbage.type": "家用及商用袋类",
    "product.garbage.title": "可降解垃圾袋",
    "product.garbage.material": "袋类用可降解材料，具体规格按询盘确认",
    "product.garbage.colors": "黄色、绿色、黑色或定制颜色",
    "product.garbage.custom": "可沟通卷装、折叠装、厚度和颜色",
    "product.garbage.apps": "家庭、办公、零售和轻商用垃圾收集",
    "product.flexible.type": "柔性包装",
    "product.flexible.title": "柔性包装袋",
    "product.flexible.material": "可降解柔性包装材料，最终结构按应用确认",
    "product.flexible.custom": "袋型、尺寸、厚度和包装方式可调整",
    "product.flexible.apps": "购物袋、零售包装、餐饮服务袋和手提袋",
    "product.mulch.title": "可降解地膜",
    "product.mulch.apps": "农业覆土、作物保护和田间种植支持",
    "product.pbat.type": "工业原料",
    "product.pbat.title": "PBAT 改性材料 / 母粒",
    "product.pbat.material": "用于可降解制品应用的 PBAT 基改性材料",
    "product.pbat.sizes": "颗粒料；牌号和包装按询盘确认",
    "product.pbat.colors": "本色或按配方定制",
    "product.pbat.packaging": "可沟通工业袋装或托盘包装",
    "product.pbat.price": "PBAT 母粒 / 改性颗粒料参考价：RMB 9,800/吨；具体牌号和包装按询盘确认。",
    "product.pbat.custom": "可评估配方和加工需求",
    "product.pbat.apps": "薄膜、袋类、混配料和可降解制品生产",
    "product.blown.type": "薄膜产品",
    "product.blown.title": "可降解吹膜",
    "product.blown.material": "PBAT 基可降解吹膜材料，最终配方按应用确认",
    "product.blown.sizes": "膜卷宽度、厚度和收卷方式按询盘确认",
    "product.blown.colors": "透明、本色、白色或按项目定制色",
    "product.blown.packaging": "可沟通膜卷、纸箱或托盘包装",
    "product.blown.custom": "可评估膜厚、宽度、收卷、颜色和配方需求",
    "product.blown.apps": "制袋、柔性包装膜、快递袋和下游加工产品",
    "product.downstream.type": "下游产品",
    "product.downstream.title": "下游加工产品选项",
    "product.downstream.intro": "这些产品属于母粒和吹膜供应链的下游应用，可按尺寸、厚度、包装方式和订单计划确认。",
    "product.takeout.type": "餐饮包装",
    "product.takeout.title": "可堆肥外卖餐盒",
    "product.takeout.material": "可堆肥餐饮包装材料，具体规格按询盘确认",
    "product.takeout.sizes": "长方形和圆形规格；支持定制尺寸",
    "product.takeout.colors": "本色、白色或按项目定制",
    "product.takeout.custom": "可沟通尺寸、盖型、纸箱包装和私标需求",
    "product.takeout.apps": "外卖、餐饮、食品配送和环保食品包装",
    "about.kicker": "关于 Veyron Materials",
    "about.title": "面向 PBAT 材料与可降解包装的 B2B 供应沟通伙伴。",
    "about.text": "Veyron Materials 是江苏微远新材料科技有限公司用于海外市场沟通的品牌名称，专注于可降解塑料产品、PBAT 改性材料和柔性包装解决方案。",
    "about.supply": "我们与中国的生产和供应链伙伴合作，为海外 B2B 客户支持可降解包装产品和 PBAT 基材料方案。",
    "about.certification": "澳洲认证信息可在合格询盘中沟通；具体证书名称、覆盖产品范围和文件应在采购前确认。",
    "why.kicker": "为什么选择 Veyron",
    "why.item1": "适合早期合作沟通的灵活 MOQ",
    "why.item2": "支持定制尺寸、厚度、颜色和包装",
    "why.item3": "支持样品测试和规格评估",
    "why.item4": "认证细节可向合格询盘客户提供",
    "why.item5": "适合包装品牌、分销商、进口商和 B2B 采购客户",
    "faq.kicker": "常见问题",
    "faq.title": "B2B 买家常见问题。",
    "faq.intro": "回答以第一阶段询盘沟通为主，最终规格需要按具体项目确认。",
    "faq.q1": "你们供应哪些产品？",
    "faq.a1": "我们支持 PBAT 改性材料、可降解吹膜、可降解地膜、快递袋、垃圾袋、柔性包装袋和可堆肥外卖餐盒。",
    "faq.q2": "可以申请样品吗？",
    "faq.a2": "合格 B2B 询盘可以沟通样品，具体取决于产品类型、当前库存和项目要求。",
    "faq.q3": "MOQ 是多少？",
    "faq.a3": "MOQ 取决于产品类型、尺寸、材料、印刷、包装和订单计划。",
    "faq.q4": "可以定制尺寸、厚度、颜色或包装吗？",
    "faq.a4": "可以。尺寸、厚度、颜色、印刷和包装方式可根据产品和订单计划沟通。",
    "faq.q5": "可以查看认证信息吗？",
    "faq.a5": "澳洲认证信息可在合格 B2B 沟通中查看。具体证书名称、编号和覆盖产品范围应在订单前确认。",
    "faq.q6": "支持私标或 OEM 包装吗？",
    "faq.a6": "私标和 OEM 包装可根据产品类型、设计稿、订单数量和包装要求评估。",
    "faq.q7": "哪些客户适合合作？",
    "faq.a7": "包装品牌、分销商、批发商、进口商、电商包装客户和环保包装公司都适合进一步沟通。",
    "contact.kicker": "联系 / 询盘表单",
    "contact.title": "发送产品规格，用于 B2B 报价或样品沟通。",
    "contact.intro": "请包含产品类别、目的地市场、预计数量、尺寸、厚度、印刷、包装和认证需求。我们会回复合适的产品和材料信息。",
    "contact.location": "中国供应链支持",
    "contact.markets": "服务澳洲及海外 B2B 市场",
    "contact.australia": "认证细节可按需提供",
    "form.name": "姓名",
    "form.company": "公司名称",
    "form.email": "邮箱",
    "form.country": "国家 / 地区",
    "form.product": "感兴趣的产品",
    "form.quantity": "预计数量",
    "form.custom": "定制需求",
    "form.message": "留言",
    "form.send": "发送询盘",
    "form.samples": "申请样品",
    "form.note": "此表单会直接把询盘发送至 sales@veyronmaterials.com。如果提交失败，请直接发送邮件并附上产品、市场、数量和规格需求。",
    "form.sending": "正在发送询盘...",
    "form.success": "询盘已发送。我们会在查看产品需求后通过邮件回复。",
    "form.error": "表单暂时无法发送。请直接发送邮件至 sales@veyronmaterials.com，并附上产品、市场、数量和规格需求。",
    "form.productPlaceholder": "选择产品类别",
    "form.namePlaceholder": "你的姓名",
    "form.companyPlaceholder": "公司名称",
    "form.emailPlaceholder": "name@company.com",
    "form.countryPlaceholder": "目的地市场",
    "form.quantityPlaceholder": "预计订单数量",
    "form.customPlaceholder": "尺寸、厚度、颜色、印刷、包装、MOQ 或样品需求。",
    "form.messagePlaceholder": "请说明应用场景、目的地市场和认证需求。",
    "footer.tagline": "面向 B2B 买家的 PBAT 材料与可降解包装",
  },
};

const emailLabels = {
  en: {
    quote: "B2B inquiry",
    samples: "Sample request",
    name: "Name",
    company: "Company",
    email: "Email",
    country: "Country / Region",
    product: "Product",
    quantity: "Estimated Quantity",
    custom_requirements: "Custom Requirements",
    message: "Message",
    notProvided: "Not provided",
  },
  zh: {
    quote: "B2B 询盘",
    samples: "样品申请",
    name: "姓名",
    company: "公司名称",
    email: "邮箱",
    country: "国家 / 地区",
    product: "产品",
    quantity: "预计数量",
    custom_requirements: "定制需求",
    message: "留言",
    notProvided: "未填写",
  },
};

let currentSlide = 0;
let slideTimer;
let currentLanguage = "en";

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentSlide);
  });

  const activeContent = heroSlides[currentLanguage][currentSlide];
  if (heroTitle && heroSubtitle && activeContent) {
    heroTitle.textContent = activeContent.title;
    heroSubtitle.textContent = activeContent.subtitle;
  }
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = translations[language][key];
    if (value) element.setAttribute("placeholder", value);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === language);
  });

  showSlide(currentSlide);
}

function startSlideshow() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6400);
}

function setMobileMenuOpen(isOpen) {
  if (!siteHeader || !mobileMenuToggle || !mobileMenu) return;

  siteHeader.classList.toggle("is-mobile-menu-open", isOpen);
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggle.setAttribute("aria-label", isOpen ? "Close section menu" : "Open section menu");
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
}

function readFormValue(name) {
  if (!contactForm) return "";
  const field = contactForm.elements.namedItem(name);
  return field && "value" in field ? field.value.trim() : "";
}

function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function setFormBusy(isBusy) {
  formButtons.forEach((button) => {
    button.disabled = isBusy;
  });
}

function setFormStatus(message, type = "info", fallbackHref = "") {
  if (!formStatus) return;

  formStatus.hidden = false;
  formStatus.classList.toggle("is-error", type === "error");
  formStatus.textContent = message;

  if (fallbackHref) {
    const fallbackLink = document.createElement("a");
    fallbackLink.href = fallbackHref;
    fallbackLink.textContent = currentLanguage === "zh" ? "打开邮件兜底" : "Open email fallback";
    formStatus.append(" ");
    formStatus.append(fallbackLink);
  }
}

function buildInquiryLines(labels, requestType) {
  const fields = [
    "name",
    "company",
    "email",
    "country",
    "product",
    "quantity",
    "custom_requirements",
    "message",
  ];

  return [
    `Request Type: ${requestType}`,
    `Language: ${currentLanguage === "zh" ? "Chinese" : "English"}`,
    `Source Page: ${window.location.href}`,
    "",
    ...fields.map((name) => `${labels[name]}: ${readFormValue(name) || labels.notProvided}`),
  ];
}

function buildMailtoHref(labels, requestType) {
  const subject = `${requestType} - Veyron Materials`;
  return `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    buildInquiryLines(labels, requestType).join("\n"),
  )}`;
}

async function handleInquirySubmit(event) {
  if (!contactForm) return;

  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const labels = emailLabels[currentLanguage] || emailLabels.en;
  const requestType = event.submitter?.value === "samples" ? labels.samples : labels.quote;
  const formData = new FormData(contactForm);
  const submitEndpoint = contactForm.action;
  const fallbackHref = buildMailtoHref(labels, requestType);

  if (event.submitter?.name) formData.set(event.submitter.name, event.submitter.value || requestType);

  formData.set("request_type", requestType);
  formData.set("language", currentLanguage === "zh" ? "Chinese" : "English");
  formData.set("source_page", window.location.href);
  formData.set("_subject", `${requestType} - Veyron Materials`);
  formData.set("_url", window.location.href);
  formData.set("_replyto", readFormValue("email"));

  setFormBusy(true);
  setFormStatus(getTranslation("form.sending"));

  try {
    const response = await fetch(submitEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Inquiry submission failed");

    setFormStatus(getTranslation("form.success"));
    contactForm.reset();
  } catch (error) {
    console.warn("Inquiry form submission failed", error);
    setFormStatus(getTranslation("form.error"), "error", fallbackHref);
  } finally {
    setFormBusy(false);
  }
}

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    showSlide(dotIndex);
    startSlideshow();
  });
});

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlideshow();
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langOption);
  });
});

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
    setMobileMenuOpen(!isOpen);
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMobileMenuOpen(false);
  });
}

document.addEventListener("click", (event) => {
  if (!siteHeader || !siteHeader.classList.contains("is-mobile-menu-open")) return;
  if (!siteHeader.contains(event.target)) setMobileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1181px)").matches) setMobileMenuOpen(false);
});

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    if (productSelect) productSelect.value = button.dataset.product;
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", handleInquirySubmit);
}

setLanguage("en");
startSlideshow();
