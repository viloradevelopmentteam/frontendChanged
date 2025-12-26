// import { useNavigate } from "react-router-dom";

// export default function LoginDefault() {
//   const navigate = useNavigate();

//   // const {
//   //   formData,
//   //   error,
//   //   showPassword,
//   //   handleChange,
//   //   togglePassword,
//   //   login,
//   // } = useAuthStore();



//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   login(navigate);
//   // };

//   // const { isLoading } = useCommonStore()
//   // if (isLoading) return <Loader />;


//   return (

//     <>

//       {
//         isLoading ? (
//           <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex flex-col justify-center items-center">
//             {/* <Loader /> */}
//           </div>
//         ) : (
//           <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">

//             <div
//               className="absolute inset-0 opacity-30"
//               style={{
//                 backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }}
//             />


//             <div
//               className="absolute inset-0 opacity-20 animate-pulse"
//               style={{
//                 backgroundImage: `radial-gradient(circle, #8b5cf6 1.5px, transparent 1.5px)`,
//                 backgroundSize: '40px 40px',
//                 backgroundPosition: '20px 20px'
//               }}
//             />


//             <div
//               className="absolute inset-0 opacity-10"
//               style={{
//                 backgroundImage: `
//             linear-gradient(to right, #3b82f6 1px, transparent 1px),
//             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
//           `,
//                 backgroundSize: '60px 60px'
//               }}
//             />


//             <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-400 blur-3xl opacity-50 rounded-full animate-pulse" />
//             <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-400 blur-3xl opacity-50 rounded-full animate-pulse" />

//             <div className="mb-10 text-6xl font-black drop-shadow-2xl uppercase">
//               <span className="text-red-700">Vilora</span>{" "}
//               <span className="text-blue-500">Tech</span>{" "}
//               <span className="text-blue-800">Education</span>
//             </div>

//             <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8">

//               <div className="mb-6 text-center">
//                 <h1 className="text-2xl font-bold text-gray-700">
//                   Login
//                 </h1>
//                 <p className="text-sm text-gray-600">
//                   Secure access to courses, students, and staff management
//                 </p>
//               </div>


//               <CommonForm onSubmit={handleSubmit}>

//                 <div>
//                   <Label>Email *</Label>
//                   <Input
//                     name="email"
//                     value={formData.email}
//                     placeholder="info@gmail.com"
//                     onChange={handleChange}
//                     className="rounded-xl"
//                   />
//                   {error.email && (
//                     <p className="text-error-500 pt-2 text-xs">{error.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label>Password *</Label>
//                   <div className="relative">
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       value={formData.password}
//                       placeholder="Enter your password"
//                       onChange={handleChange}
//                       className="rounded-xl"
//                     />
//                     <span
//                       onClick={togglePassword}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//                     >
//                       {showPassword ? (
//                         <EyeIcon className="size-5" />
//                       ) : (
//                         <EyeClosedIcon className="size-5" />
//                       )}
//                     </span>
//                   </div>
//                   {error.password && (
//                     <p className="text-error-500 pt-2 text-xs">
//                       {error.password}
//                     </p>
//                   )}
//                 </div>

//                 <SubmitButton label="Sign in" />
//               </CommonForm>
//               <div className="mt-6 text-center">
//                 <p className="text-sm text-gray-500">
//                   © 2026 Vilora Tech Education. All rights reserved.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </>

//   );
// };


// function useCommonStore(): { isLoading: any; } {
//   throw new Error("Function not implemented.");
// }

