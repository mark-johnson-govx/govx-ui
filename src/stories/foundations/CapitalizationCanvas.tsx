import React from "react";

const CapitalizationCanvas = () => {
  return (
    <div className="tw-font-sans">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Capitalization &amp; Punctuation
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <h3 className="tw-font-bold mb-4 tw-text-xl">Capitalization</h3>
      <p>
        Whenever possible, use sentence case capitalization. However, we may
        deviate from this rule if using a different case structure adds visual
        clarity to the information being presented.
      </p>
      <p>Notable exceptions include:</p>

      <div className="tw-table tw-w-full tw-rounded-lg tw-overflow-hidden tw-border-gray-light tw-border tw-border-solid tw-bg-gray-subtle">
        <div className="tw-table-header-group">
          <div className="tw-table-row">
            <div className="tw-table-cell tw-bg-gray-subtle tw-text-gray-medium tw-p-4 tw-font-medium ">
              Scenario
            </div>
            <div className="tw-table-cell tw-bg-gray-subtle tw-text-gray-medium tw-p-4 tw-font-medium ">
              Capitalization rule
            </div>
            <div className="tw-table-cell tw-bg-gray-subtle tw-text-gray-medium tw-p-4 tw-font-medium ">
              Definition
            </div>
            <div className="tw-table-cell tw-bg-gray-subtle tw-text-gray-medium tw-p-4 tw-font-medium ">
              Example
            </div>
          </div>
        </div>
        <div className="tw-table-row-group">
          <div className="tw-table-row">
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Product name
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Title case
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              The first letter of each word is capitalized, except for certain
              small words, such as articles and short prepositions.
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Aviator Large Metal Mirror Sunglasses
            </div>
          </div>
          <div className="tw-table-row">
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Brand names
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Title case
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              The first letter of each word is capitalized, except for certain
              small words, such as articles and short prepositions.
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              The North Face
            </div>
          </div>
          <div className="tw-table-row">
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Section headers
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Uppercase
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              Every letter of the word is capitalized
            </div>
            <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
              POPULAR PRODUCTS
            </div>
          </div>
          <div className="tw-table-row tw-shadow-inner tw-h-8"></div>
        </div>
      </div>

      <h3 className="reset tw-mt-8 tw-font-bold mb-4 tw-text-xl">
        Punctuation
      </h3>
      <p>
        No punctuation should be used in headlines, which will typically not be
        a complete sentence. In all paragraphs, normal punctuation should be
        used.
      </p>
    </div>
  );
};

export default CapitalizationCanvas;
