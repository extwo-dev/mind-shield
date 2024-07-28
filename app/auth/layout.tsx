import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const AuthLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      { children }
    </div>
  )
}

export default AuthLayout;