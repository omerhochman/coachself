import * as React from "react";
import { View } from "react-native";
import GenericQuestion from "../components/generic_question/GenericQuestion";
import { getQuestionById } from "../common/structure/Questions";
import IDS from "../common/structure/ids";

export default ({ navigation, route = {} }) => {
  const { params = {} } = route;
  const { id = IDS.Q1 } = params;

  const question = getQuestionById(id);
  return (
    <View>
      <GenericQuestion navigation={navigation} question={question} />
    </View>
  );
};
