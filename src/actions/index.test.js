import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("Save comment", () => {
  it("returns the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("returns the correct payload", () => {
    const action = saveComment("Expected Comment");

    expect(action.payload).toEqual("Expected Comment");
  });
});
