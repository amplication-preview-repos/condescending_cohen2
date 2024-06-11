import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
