<?php
namespace Packt\Promo\Block;

/**
* Promo block
*/
class Promo
    extends \Magento\Framework\View\Element\Template{

    protected $context;
    protected $_categoryFactory;
    protected $storeManager;

   public function __construct(
   \Magento\Backend\Block\Template\Context $context,
   \Magento\Catalog\Model\CategoryFactory $categoryFactory,
   \Magento\Store\Model\StoreManagerInterface $storeManager,
   array $data = []
   ){
    $this->_storeManager=$storeManager;
    $this->_categoryFactory = $categoryFactory;
    parent::__construct($context, $data);
   }

   public function getCategory($categoryId){
     $category = $this->_categoryFactory->create();
     $category->load($categoryId);
     return $category;
   }

   public function getCategoryProducts($categoryId){
     $products = $this->getCategory($categoryId)->getProductCollection();
     $products->addAttributeToSelect('small_image');
     return $products;
   }

   public function getProductUrlImage(){
     return
      $this->_storeManager->getStore()->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_MEDIA) .
      "catalog/product";
   }

    public function getTitle(){
      return "My Promotions Block";
    }
}
