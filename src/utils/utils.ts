import { COLORS } from "@/theme";
import { statusStyles } from "./constant";
import { Status } from "./enums";

type TextInputColorParams = {
  value: number | string;
  error: boolean;
  isFocused: boolean;
  withError?: boolean;
};

/**
 * Determines the color for a TextInput based on its state.
 *
 * @param params - Object containing state flags.
 * @param params.withError - Indicates if the TextInput should show an error state.
 * @param params.error - Indicates if there is an error in the TextInput.
 * @param params.isFocused - Indicates if the TextInput is currently focused.
 * @returns A string representing the color to be applied to the TextInput.
 */
export const getTextInputColor = ({
  value,
  error,
  isFocused,
  withError = true,
}: TextInputColorParams): string => {
  if (!value) return COLORS.inputBackground;
  if (!isFocused) return COLORS.gray;
  // if (!value) return COLORS.lightgray;
  if (withError && error) return COLORS.error;

  return COLORS.primary;
};

/**
 * Returns the appropriate styles based on the given status.
 * @param params - The input parameters.
 * @param params.item - The item object containing a `status` field (optional).
 * @param params.status - The fallback status if `item.status` is not provided (optional).
 * @returns An object containing `backgroundColor` and `textColor` based on the resolved status.
 */
export const getStatusStyles = ({
    item,
    status,
  }: {
    item?: { status?: Status };
    status?: Status;
  }): { backgroundColor: string; textColor: string } => {
    const resolvedStatus = item?.status || status;
    return (
      statusStyles.get(resolvedStatus as Status) || {
        backgroundColor: "transparent",
        textColor: COLORS.gray,
      }
    );
  };
