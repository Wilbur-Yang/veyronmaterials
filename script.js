const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll(".hero-dots button"));
const nextButton = document.querySelector(".hero-arrow");
const heroTitle = document.querySelector("[data-hero-title]");
const heroSubtitle = document.querySelector("[data-hero-subtitle]");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const productSelect = document.querySelector("#product-interest");

const heroSlides = {
  en: [
    {
      title: "Biodegradable products and PBAT-based material solutions for B2B buyers.",
      subtitle:
        "Veyron Materials supports overseas packaging brands, distributors, wholesalers, e-commerce packaging buyers, and eco-packaging companies with samples, customization, flexible MOQ, and Australian certification obtained.",
    },
    {
      title: "Mailer bags and flexible packaging built for practical procurement.",
      subtitle:
        "Discuss size, thickness, color, packaging, sample testing and MOQ for biodegradable courier and e-commerce packaging projects.",
    },
    {
      title: "PBAT modified material for film, bags and biodegradable products.",
      subtitle:
        "Material specifications, samples and Australian certification status can be reviewed for qualified B2B material inquiries.",
    },
    {
      title: "Compostable takeout boxes and tableware for food-service packaging.",
      subtitle:
        "Support for wholesale, private label and custom packaging discussions based on application and order plan.",
    },
    {
      title: "A first-step supply partner for overseas eco-packaging buyers.",
      subtitle:
        "Clear product categories, practical customization options, and inquiry-first cooperation for early-stage B2B projects.",
    },
  ],
  zh: [
    {
      title: "面向海外 B2B 客户的可降解产品与 PBAT 改性材料方案。",
      subtitle:
        "Veyron Materials 支持包装品牌、分销商、批发商、电商包装客户和环保包装公司，提供样品测试、定制、灵活 MOQ，并已获得澳洲认证。",
    },
    {
      title: "适合实际采购沟通的快递袋与柔性包装产品。",
      subtitle:
        "可围绕尺寸、厚度、颜色、包装方式、样品测试和 MOQ 讨论可降解快递及电商包装项目。",
    },
    {
      title: "用于薄膜、袋类和可降解制品的 PBAT 改性材料。",
      subtitle:
        "针对合格 B2B 原料询盘，可沟通材料规格、样品和澳洲认证情况。",
    },
    {
      title: "面向餐饮外卖场景的可降解餐盒与餐具。",
      subtitle:
        "根据应用和订单计划，支持批发、私标包装和定制包装需求沟通。",
    },
    {
      title: "海外环保包装买家的第一阶段供应沟通伙伴。",
      subtitle:
        "清楚的产品分类、实用的定制选项，以及以询盘为起点的 B2B 合作方式。",
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
    "hero.eyebrow": "Biodegradable packaging and PBAT materials",
    "hero.primary": "Send Inquiry",
    "hero.secondary": "View Product Range",
    "hero.stat1Label": "Samples",
    "hero.stat1Value": "Available for B2B evaluation",
    "hero.stat2Label": "Customization",
    "hero.stat2Value": "Size, thickness, color, packaging",
    "hero.stat3Label": "Australia",
    "hero.stat3Value": "Australian certification obtained",
    "buyer.title": "Suitable for",
    "buyer.text": "Packaging brands, wholesalers, distributors, e-commerce packaging buyers, and eco-packaging companies.",
    "buyer.cta": "Discuss your product requirement",
    "products.kicker": "Product Catalog",
    "products.title": "Core products for first-stage B2B inquiries.",
    "products.intro": "Each product category can be discussed by material, size, thickness, color, packaging, MOQ and intended application. Exact specifications are confirmed by inquiry.",
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
    "about.title": "Overseas communication brand for biodegradable products and PBAT material solutions.",
    "about.text": "Veyron Materials is the overseas market communication brand of Jiangsu Weiyuan New Material Technology Co., Ltd., focusing on biodegradable plastic products, PBAT modified materials and flexible packaging solutions.",
    "about.supply": "We work with manufacturing and supply chain partners in China to support biodegradable packaging products and PBAT-based material solutions for overseas B2B clients.",
    "about.certification": "Veyron Materials has obtained Australian certification, supporting supply discussions for biodegradable packaging products and PBAT modified materials in the Australian market.",
    "why.kicker": "Why Veyron",
    "why.item1": "Flexible MOQ for early-stage cooperation",
    "why.item2": "Custom sizes and packaging",
    "why.item3": "Support for sample testing",
    "why.item4": "Australian certification obtained",
    "why.item5": "Suitable for packaging brands, distributors and B2B buyers",
    "faq.kicker": "FAQ",
    "faq.title": "Common questions from B2B buyers.",
    "faq.intro": "Answers are kept practical for first-stage inquiry discussions. Final specifications are confirmed case by case.",
    "faq.q1": "What products do you supply?",
    "faq.a1": "We supply biodegradable mailer bags, garbage bags, flexible packaging bags, biodegradable mulch film, compostable takeout boxes and PBAT modified material.",
    "faq.q2": "Can I request samples?",
    "faq.a2": "Samples can be discussed for qualified B2B inquiries. Availability depends on product type and current stock.",
    "faq.q3": "What is your MOQ?",
    "faq.a3": "MOQ depends on product type, size, material, printing and packaging requirements.",
    "faq.q4": "Can you customise size, thickness, colour or packaging?",
    "faq.a4": "Yes. Custom size, thickness, color, printing and packaging can be discussed according to the product and order plan.",
    "faq.q5": "Have you obtained Australian certification?",
    "faq.a5": "Yes. Veyron Materials has obtained Australian certification for relevant B2B supply discussions.",
    "faq.q6": "Do you support private label or OEM packaging?",
    "faq.a6": "Private label and OEM packaging can be reviewed based on product type, artwork, order quantity and packaging requirements.",
    "faq.q7": "Which customers are suitable for cooperation?",
    "faq.a7": "Packaging brands, distributors, wholesalers, e-commerce packaging buyers and eco-packaging companies are suitable for discussion.",
    "contact.kicker": "Contact / Inquiry Form",
    "contact.title": "Send a B2B inquiry for product, sample or certification support.",
    "contact.intro": "Share the product category, target market, estimated quantity and customization needs. We will respond with suitable product and material information.",
    "contact.location": "China supply chain support",
    "contact.markets": "Serving Australian and overseas B2B markets",
    "contact.australia": "Australian certification obtained",
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
    "form.productPlaceholder": "Select a product category",
    "form.namePlaceholder": "Your name",
    "form.companyPlaceholder": "Company name",
    "form.emailPlaceholder": "name@company.com",
    "form.countryPlaceholder": "Destination market",
    "form.quantityPlaceholder": "Estimated order quantity",
    "form.customPlaceholder": "Size, thickness, color, printing, packaging, MOQ or sample needs.",
    "form.messagePlaceholder": "Tell us your application, destination market and certification needs.",
    "footer.tagline": "Biodegradable packaging and PBAT materials for B2B buyers",
  },
  zh: {
    "nav.products": "产品",
    "nav.why": "为什么选择 Veyron",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "nav.quote": "获取报价",
    "hero.eyebrow": "可降解包装与 PBAT 材料",
    "hero.primary": "提交询盘",
    "hero.secondary": "查看产品范围",
    "hero.stat1Label": "样品",
    "hero.stat1Value": "支持 B2B 客户评估测试",
    "hero.stat2Label": "定制",
    "hero.stat2Value": "尺寸、厚度、颜色、包装",
    "hero.stat3Label": "澳洲认证",
    "hero.stat3Value": "已获得澳洲认证",
    "buyer.title": "适合客户",
    "buyer.text": "包装品牌、批发商、分销商、电商包装客户和环保包装公司。",
    "buyer.cta": "沟通你的产品需求",
    "products.kicker": "产品目录",
    "products.title": "适合第一阶段 B2B 询盘的核心产品。",
    "products.intro": "每个产品类别都可以围绕材料、尺寸、厚度、颜色、包装、MOQ 和应用场景沟通，具体规格以询盘确认为准。",
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
    "product.blown.type": "吹膜产品",
    "product.blown.title": "可降解吹膜产品",
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
    "product.takeout.title": "可降解外卖餐盒",
    "product.takeout.material": "可降解餐饮包装材料，具体规格按询盘确认",
    "product.takeout.sizes": "长方形和圆形规格；支持定制尺寸",
    "product.takeout.colors": "本色、白色或按项目定制",
    "product.takeout.custom": "可沟通尺寸、盖型、纸箱包装和私标需求",
    "product.takeout.apps": "外卖、餐饮、食品配送和环保食品包装",
    "about.kicker": "关于 Veyron Materials",
    "about.title": "用于海外市场沟通的可降解产品与 PBAT 材料品牌。",
    "about.text": "Veyron Materials 是江苏微源新材料科技有限公司用于海外市场沟通的品牌名称，专注于可降解塑料产品、PBAT 改性材料和柔性包装解决方案。",
    "about.supply": "我们与中国的生产和供应链伙伴合作，为海外 B2B 客户支持可降解包装产品和 PBAT 基材料方案。",
    "about.certification": "Veyron Materials 已获得澳洲认证，可支持澳洲市场可降解包装产品和 PBAT 改性材料的供应沟通。",
    "why.kicker": "为什么选择 Veyron",
    "why.item1": "适合早期合作沟通的灵活 MOQ",
    "why.item2": "支持定制尺寸和包装",
    "why.item3": "支持样品测试",
    "why.item4": "已获得澳洲认证",
    "why.item5": "适合包装品牌、分销商和 B2B 采购客户",
    "faq.kicker": "常见问题",
    "faq.title": "B2B 客户常见问题。",
    "faq.intro": "回答以第一阶段询盘沟通为主，最终规格需要按具体项目确认。",
    "faq.q1": "你们供应哪些产品？",
    "faq.a1": "我们供应可降解快递袋、垃圾袋、柔性包装袋、可降解地膜、可降解外卖餐盒和 PBAT 改性材料。",
    "faq.q2": "可以申请样品吗？",
    "faq.a2": "合格 B2B 询盘可以沟通样品，具体取决于产品类型和当前库存情况。",
    "faq.q3": "MOQ 是多少？",
    "faq.a3": "MOQ 取决于产品类型、尺寸、材料、印刷和包装要求。",
    "faq.q4": "可以定制尺寸、厚度、颜色或包装吗？",
    "faq.a4": "可以。尺寸、厚度、颜色、印刷和包装方式可根据产品和订单计划沟通。",
    "faq.q5": "是否已获得澳洲认证？",
    "faq.a5": "是的。Veyron Materials 已获得澳洲认证，可支持相关 B2B 供应沟通。",
    "faq.q6": "支持私标或 OEM 包装吗？",
    "faq.a6": "私标和 OEM 包装可根据产品类型、设计稿、订单数量和包装要求评估。",
    "faq.q7": "哪些客户适合合作？",
    "faq.a7": "包装品牌、分销商、批发商、电商包装客户和环保包装公司都适合进一步沟通。",
    "contact.kicker": "联系 / 询盘表单",
    "contact.title": "提交产品、样品或认证相关的 B2B 询盘。",
    "contact.intro": "请告知产品类别、目标市场、预估数量和定制需求，我们会回复适合的产品和材料信息。",
    "contact.location": "中国供应链支持",
    "contact.markets": "服务澳洲及海外 B2B 市场",
    "contact.australia": "已获得澳洲认证",
    "form.name": "姓名",
    "form.company": "公司名称",
    "form.email": "邮箱",
    "form.country": "国家 / 地区",
    "form.product": "感兴趣的产品",
    "form.quantity": "预估数量",
    "form.custom": "定制需求",
    "form.message": "留言",
    "form.send": "发送询盘",
    "form.samples": "申请样品",
    "form.productPlaceholder": "选择产品类别",
    "form.namePlaceholder": "你的姓名",
    "form.companyPlaceholder": "公司名称",
    "form.emailPlaceholder": "name@company.com",
    "form.countryPlaceholder": "目标市场",
    "form.quantityPlaceholder": "预估订单数量",
    "form.customPlaceholder": "尺寸、厚度、颜色、印刷、包装、MOQ 或样品需求。",
    "form.messagePlaceholder": "请说明应用场景、目的地市场和认证需求。",
    "footer.tagline": "面向 B2B 客户的可降解包装与 PBAT 材料",
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

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    if (productSelect) productSelect.value = button.dataset.product;
  });
});

setLanguage("en");
startSlideshow();
