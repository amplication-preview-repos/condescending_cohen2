import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
