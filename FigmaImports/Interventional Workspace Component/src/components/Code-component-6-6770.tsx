import React from "react";
import imgImage1 from "figma:asset/82f7f32e258c1f3564c6028958e44e4ec5476529.png";
import imgImage2 from "figma:asset/71dabdc7502548dbc0e7e3fc8521d3ad4a8010af.png";
import imgImage3 from "figma:asset/db228b80ad186ca3d5adc278aa560e86a0eda3b7.png";
import imgImage4 from "figma:asset/7ece7bb00a5e8eaa345a0ea283f6a6bc424b0ef3.png";
import MedicalImageViewer from "./MedicalImageViewer";

export default function ViewerGrid() {
  return (
    <div className="absolute bottom-0 left-[324px] right-0 top-[104px]" data-name="View area">
      {/* Left viewer */}
      <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start left-0 top-0" data-name="Left" style={{ right: "calc(16.667% + 181.333px)" }}>
        <MedicalImageViewer 
          imageUrl={imgImage1}
          viewType="coronal"
          rotationAngle="Rot 0˚ Ang 0˚"
          hasRotationButtons={true}
        />
      </div>

      {/* Right side - 3 viewers stacked */}
      <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start right-0 top-0" data-name="Right" style={{ left: "calc(66.667% + 0.333px)" }}>
        <MedicalImageViewer 
          imageUrl={imgImage2}
          viewType="coronal"
          rotationAngle="Rot 0˚ Ang 0˚ "
          hasReferenceLines={true}
        />
        <MedicalImageViewer 
          imageUrl={imgImage3}
          viewType="axial"
          rotationAngle="Rot 0˚ Ang 90˚"
          hasReferenceLines={true}
        />
        <MedicalImageViewer 
          imageUrl={imgImage4}
          viewType="sagittal"
          rotationAngle="Rot 90˚ Ang 0˚"
          hasReferenceLines={true}
        />
      </div>
    </div>
  );
}