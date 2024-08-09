import React from "react";
import Switch from "@/components/ui/Switch";
import useRtl from "@/hooks/useRtl";

const RtlSwicth = () => {
  const [isRtl, setRtl] = useRtl();
  return (
    <div className="flex justify-between">
      <div className="text-gray-600 text-base dark:text-gray-300">Rtl</div>
      <Switch
        value={isRtl}
        onChange={() => setRtl(!isRtl)}
        id="rtl_nav_tools"
      />
    </div>
  );
};

export default RtlSwicth;
