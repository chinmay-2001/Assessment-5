/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
};

export type CreateEmployeeInput = {
  id?: string | null;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
};

export type ModelEmployeeConditionInput = {
  employeeName?: ModelStringInput | null;
  employeeEmail?: ModelStringInput | null;
  employeePhoneNo?: ModelIntInput | null;
  employeeAddress?: ModelStringInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeInput = {
  id: string;
  employeeName?: string | null;
  employeeEmail?: string | null;
  employeePhoneNo?: number | null;
  employeeAddress?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  employeeName?: ModelStringInput | null;
  employeeEmail?: ModelStringInput | null;
  employeePhoneNo?: ModelIntInput | null;
  employeeAddress?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  employeeName?: ModelSubscriptionStringInput | null;
  employeeEmail?: ModelSubscriptionStringInput | null;
  employeePhoneNo?: ModelSubscriptionIntInput | null;
  employeeAddress?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    employeeName: string;
    employeeEmail: string;
    employeePhoneNo: number;
    employeeAddress: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  employeeEmail: string;
  employeePhoneNo: number;
  employeeAddress: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            employeeName
            employeeEmail
            employeePhoneNo
            employeeAddress
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  OnCreateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > {
    const statement = `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onCreateEmployee(filter: $filter) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
    >;
  }

  OnUpdateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > {
    const statement = `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onUpdateEmployee(filter: $filter) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
    >;
  }

  OnDeleteEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > {
    const statement = `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onDeleteEmployee(filter: $filter) {
          __typename
          id
          employeeName
          employeeEmail
          employeePhoneNo
          employeeAddress
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
    >;
  }
}
