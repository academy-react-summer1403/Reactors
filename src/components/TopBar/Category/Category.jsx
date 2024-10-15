import React from "react";

const Category = () => {
  return (
    <div>
      <form>
        <select
          className=" gap-9 rounded-full border border-[#158B68] text-[16px] bg-[#FFFFFF] px-14 py-4"
          value={null}
        >
          <option className="border-[#158B68]" value={null}>
            مرتب سازی
          </option>
          <option value="newest">جدید ترین</option>
          <option value="oldest">قدیمی ترین</option>
          <option value="cheap">ارزان ترین</option>
          <option value="expensive">گران ترین</option>
          <option value="hardest">سخت ترین</option>
          <option value="easiest">آسان ترین</option>
        </select>
      </form>
    </div>
  );
};

export default Category;
