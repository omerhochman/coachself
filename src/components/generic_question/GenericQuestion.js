import React from "react";
import { View } from "react-native";
import Question from "../question/Question";
import Answer from "../answer/Answer";
import { CommonActions } from "@react-navigation/native/lib/typescript/src";
import { formatMessage } from "../../common/localization/message_formatter";

// Structure:
// Question =
// text: String
// answers: Array[Answer]
//
// Answer =
// text: String
// image
// background
// next: Question with or without more answers
//

let i = 0;
const redirect = (next, navigation) => {
  next &&
    navigation.dispatch(
      CommonActions.navigate({
        name: "Coach",
        key: ++i,
        params: { id: next }
      })
    );
};

const GenericQuestion = ({ question: { id, text, answers }, navigation }) => {
  return (
    <View>
      <Question
        text={formatMessage({ id: `${id}.text`, defaultMessage: text })}
      />
      {answers &&
        answers.map(({ text, next }, index) => (
          <Answer
            key={index}
            text={text}
            onPress={() => {
              redirect(next, navigation);
            }}
          />
        ))}
    </View>
  );
};

export default GenericQuestion;
