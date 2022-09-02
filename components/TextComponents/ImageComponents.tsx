import { Vector3 } from "three";
import * as constants from "../../lib/constants";
import {
  contactText,
  currentTechText,
  futureTechText,
  otherTechText,
  otherProjectsText,
  teaTextLower,
  teaTextUpper,
} from "../../lib/text";
import Gallery from "../Gallery/Gallery";
import * as imageProps from "./ImageProps";
import TextImageBillboard from "./TextImageBillboard";

export default function ImageComponents() {
  return (
    <>
      <TextImageBillboard
        textContent={currentTechText}
        textContentPosition={new Vector3(0, 90, 1)}
        baseFontWidth={113}
        images={imageProps.currentImages}
        position={constants.getCurrentTechPosition()}
        scrollVisible={constants.currentVisible}
        baseFontSize={22.5}
        key={"current"}
      />

      <TextImageBillboard
        textContent={otherTechText}
        textContentPosition={new Vector3(0, 70, 1)}
        baseFontSize={22.5}
        baseFontWidth={300}
        images={imageProps.otherImages}
        position={constants.getOtherTechPosition()}
        scrollVisible={constants.otherVisible}
        key={"otherTech"}
      />

      <TextImageBillboard
        textContent={futureTechText}
        textContentPosition={new Vector3(0, 80, 1)}
        baseFontSize={15}
        baseFontWidth={180}
        images={imageProps.futureImages}
        position={constants.getFutureTechPosition()}
        scrollVisible={constants.futureVisible}
        key={"future"}
      />
      <TextImageBillboard
        textContent={teaTextUpper}
        textContentPosition={new Vector3(0, 30, 0)}
        images={imageProps.teaImages}
        position={constants.getTeaPosition()}
        scrollVisible={constants.teaVisible}
        bottomTextContent={teaTextLower}
        bottomTextContentPosition={new Vector3(0, -25, 0)}
        baseFontWidth={110}
        baseFontSize={4}
        key={"tea"}
      />

      <TextImageBillboard
        textContent={otherProjectsText}
        textContentPosition={new Vector3(0, 66, 0)}
        baseFontSize={12}
        baseFontWidth={100}
        position={constants.getExperiencePosition()}
        scrollVisible={constants.otherProjectsVisible}
        key={"other"}
      >
        <Gallery
          position={new Vector3(0, 0, 0)}
          imageProps={imageProps.otherProjectImages}
          //  width + height are dummy props here, overwritten by TextImageBillboard
          width={100}
          height={80}
        />
      </TextImageBillboard>

      <TextImageBillboard
        textContent={contactText}
        baseFontSize={12}
        baseFontWidth={180}
        textContentPosition={new Vector3(0, 35, 1)}
        images={imageProps.contactImages}
        position={constants.getContactPosition()}
        scrollVisible={constants.contactVisible}
        key={"contact"}
      />
    </>
  );
}
