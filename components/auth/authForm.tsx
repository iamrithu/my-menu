"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "../ui/card";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

const AuthForm = () => {
  return (
    <div className="w-full h-full flex justify-end items-center pr-48">
      <Card>
        <CardContent className="w-[400px] min-h-[400px] pt-4">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full flex bg-black">
              <TabsTrigger value="account" className="flex-1 font-bold ">
                Login
              </TabsTrigger>
              <TabsTrigger value="password" className="flex-1  font-bold ">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <LoginForm />
            </TabsContent>
            <TabsContent value="password">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
