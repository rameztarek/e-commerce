>
      {/* PRODUCT DETAILS */}
      <div className="flex flex-col p-4 gap-4">
        <h1 className=" font-medium ">{product.name}</h1>
        <p className="text-gray-500 text-sm">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLOR */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer border rounded-full ${productType.color === color ? "border-gray-400 " : "border-gray-200 "} p-[1.2px] `}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  key={color}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full "
                    style={{ background: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CARD */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-500 rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2 "
          >
            <ShoppingCart className="w-4 h-4" />
            Add To Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
