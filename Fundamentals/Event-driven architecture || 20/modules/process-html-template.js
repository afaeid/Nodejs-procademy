module.exports = (template, prod) => {

 template = template.replaceAll("{{$PRODUCT_ID$}}", prod.id);
 template = template.replaceAll("{{$PRODUCT_NAME$}}", prod.name);
 template = template.replaceAll("{{$PRODUCT_MODEL$}}", prod.model);
 template = template.replaceAll("{{$PRODUCT_IMG_SRC$}}", prod.imageSrc);
 template = template.replaceAll("{{$PRODUCT_PRIZE$}}", prod.prize);
 template = template.replaceAll("{{$PRODUCT_DESC$}}", prod.desc);
 template = template.replaceAll("{{$PRODUCT_COLOR$}}", prod.color);
 template = template.replaceAll("{{$PRODUCT_ROM$}}", prod.ROM);

 return template;

}