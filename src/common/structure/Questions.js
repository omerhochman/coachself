import IDS from "./ids";
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";

const ID_TO_QUESTION_MAP = {
  [IDS.Q1]: Question1,
  [IDS.Q2]: Question2,
  [IDS.Q3]: Question3,
  [IDS.Q4]: Question4
};

export const getQuestionById = id => ID_TO_QUESTION_MAP[id];
