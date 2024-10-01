import React, { useState } from 'react';

const Filter = () => {
  // حالت های انتخابی برای فیلترها
  const [technology, setTechnology] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // تابع برای پاک کردن فیلترها
  const clearFilters = () => {
    setTechnology('');
    setDeliveryType('');
    setCourseLevel('');
    setPriceRange('');
  };

  return (
    <div className="p-6 bg-[#FBF6F6] shadow-md rounded-lg text-right">
      {/* بخش تکنولوژی */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 ">
          تکنولوژی
        </label>
        <select
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          className="block w-full bg-[#FBF6F6] border border-gray-300 rounded-md shadow-sm px-4 py-2 text-right text-gray-700 focus:outline-none focus:border-indigo-500"
        >
          <option value="">انتخاب تکنولوژی</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>

      {/* بخش نوع برگزاری */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          نوع برگزاری
        </label>
        <select
          value={deliveryType}
          onChange={(e) => setDeliveryType(e.target.value)}
          className="block w-full bg-[#FBF6F6] border border-gray-300 rounded-md shadow-sm px-4 py-2 text-right text-gray-700 focus:outline-none focus:border-indigo-500"
        >
          <option value="">انتخاب نوع برگزاری</option>
          <option value="Online">Online</option>
          <option value="In-person">In-person</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* بخش سطح دوره */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          سطح دوره
        </label>
        <select
          value={courseLevel}
          onChange={(e) => setCourseLevel(e.target.value)}
          className="block w-full bg-[#FBF6F6] border border-gray-300 rounded-md shadow-sm px-4 py-2 text-right text-gray-700 focus:outline-none focus:border-indigo-500"
        >
          <option value="">انتخاب سطح دوره</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* بخش قیمت */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          رنج قیمت: ريال{priceRange}
        </label>
        <input
          type="range"
          min="0"
          max="1000000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
      </div>

      {/* دکمه پاک کردن فیلترها */}
      <button
        onClick={clearFilters}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        پاک کردن فیلتر ها
      </button>
    </div>
  );
};

export default Filter;