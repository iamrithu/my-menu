"use client";

import { CldUploadWidget, cloudinaryLoader } from "next-cloudinary";
import { use, useCallback } from "react";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value?: string;
  label?: string;
  onChange: (value: string) => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="yc86zjuy"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
                            relative
                            cursor-pointer
                            hover:opacity-70
                            transition
                            border-dashed
                            border-2
                        w-full
                        h-full
                            rounded-xl
                           hover:border-neutral-700
                           flex
                           flex-col
                           items-center
                           justify-center
                           gap-4
                           text-neutral-600
                            "
          >
            <TbPhotoPlus size={30} />
            <div>Click to upload</div>
            {value && (
              <div className="rounded-md">
                <Image
                  alt="Upload"
                  src={value}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
