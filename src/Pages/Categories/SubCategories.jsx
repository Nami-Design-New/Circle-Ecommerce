import React, { useEffect, useState } from "react";
import SearchInputs from "../../inputs/SearchInputs";
import Accordion from "react-bootstrap/Accordion";
import ProductCard from "../../components/ProductCard";

const SubCategories = () => {
  const GetProducts = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(GetProducts).then(res => res.json()).then(data => setProducts(data));
  }, []);

  return (
    <section className="SubCategories">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 mb-2">
            <div className="Subcategory_filter">
              <SearchInputs />
              <div className="Tabs">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>المنتجات</Accordion.Header>
                    <Accordion.Body>1</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>الفئه</Accordion.Header>
                    <Accordion.Body>2</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>الفئه</Accordion.Header>
                    <Accordion.Body>3</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 mb-2">
            <div className="row">
              {products.map(product =>
                <div className="col-12 col-lg-3 mb-2">
                  <ProductCard
                    ImgUrl={product.image}
                    title={product.title}
                    PriceAfter={product.price}
                    PricePefore={product.price}
                    discount={product.id}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategories;
