import { Button } from "@mui/material";
import { red, grey, blue } from "@mui/material/colors";
import React, { MouseEventHandler } from "react";

type ConfirmationBoxProps = {
  /**
   * The title of the confirmation box
   */
  title: string;
  /**
   * The text shown for the message
   */
  body: string;
  /**
   * The type of confirmation box.
   */
  type: "delete" | "confirm";
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
};

const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({
  title = "",
  body = "",
  type = "confirm",
  onClose,
  onConfirm,
}) => {
  return (
    <div className="tw-relative tw-font-sans tw-m-4 tw-rounded tw-shadow-xl tw-p-6 tw-max-w-lg tw-text-center tw-border-2 tw-border-solid tw-border-gray-light">
      <button
        onClick={onClose}
        type="button"
        className="reset tw-bg-transparent tw-rounded tw-absolute tw-top-0 tw-right-0 tw-m-2 tw-cursor-pointer tw-text-xl tw-transform hover:tw-scale-[175%] hover:tw-text-gray-medium tw-transition tw-duration-150"
      >
        &times;
      </button>
      <h3 className="reset tw-text-xl tw-text-gray-darkest tw-font-extrabold tw-tracking-wide">
        {title}
      </h3>
      <p className="tw-leading-8 tw-text-lg">{body}</p>
      <div className="tw-flex tw-gap-4 tw-justify-center tw-mt-8 tw-items-center tw-border-t-2 tw-border-gray-subtle tw-border-solid tw-border-x-0 tw-border-b-0 tw-pt-3">
        <div>
          <Button
            onClick={onConfirm}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: type === "delete" ? red[700] : blue[700],
              "&:hover": {
                backgroundColor: type === "delete" ? red[800] : blue[800],
              },
            }}
          >
            {type === "delete" ? "Delete" : "Confirm"}
          </Button>
        </div>
        <div>
          <Button
            onClick={onClose}
            variant="text"
            sx={{ color: grey[700], textDecoration: "underline" }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
