import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  HomeStack: undefined;
  DetailsStack: { from: string };
  ProfileStack: undefined;
  RegisterScreen: undefined;
  RegisterProfileForm:undefined;
  FourStepForm:undefined;
  ProfileUpload:undefined;
  ConfirmDetails:undefined;
  TermConditions:undefined;
  RegisterSuccess:undefined;
  HomeScreen:undefined;
  EmailApprovalScreen:undefined;
  LoginScreen:undefined;
  FaceIdScreen:undefined;
  NotificationsScreen:undefined;
BiometricsScreen:undefined;
Home:undefined;
ForgetPasswordScreen:undefined;
VerificationScreen:undefined;
EmailScreen:undefined;
NewPasswordScreen:undefined;
PasswordUpdateSuccess:undefined;
AllocatedUnits:undefined;
ProjectDetails:undefined;
ProjectFilter: { setModalVisible: (value: boolean) => void };
FirmUnits:undefined;
FirmUnitsDetail:undefined;
WorkSheetDetails: { status: string };
WorkSheetUnits:undefined;
WorkSheetDetailsList:undefined;
WorkSheetStepFrom:undefined;
ProjectInformationTab:undefined;
Profile:undefined;
PrivacyPolicy:undefined;
TermsConditions:undefined;
ChangePassword:undefined;
AccountDeActivate:undefined;
  // add more screen props...
};

export type StackProps = NativeStackScreenProps<StackParamList, keyof StackParamList>;
