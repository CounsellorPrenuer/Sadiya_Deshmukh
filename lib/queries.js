export const pageQuery = `*[_id == "siteContentSingleton"][0]{
  brandName,tagline,aboutBrand,brandColors,
  founderName,founderBio,founderPhoto,
  services[]{title,description,whoFor,mode,loginDetails},
  packages[]{title,subtitle,price,description,image,features,category,audience},
  testimonials[]{quote,name},
  contact,
  navItems
}`;
