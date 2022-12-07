"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1201],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=a(t),g=i,y=d["".concat(c,".").concat(g)]||d[g]||l[g]||o;return t?n.createElement(y,s(s({ref:r},u),{},{components:t})):n.createElement(y,s({ref:r},u))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var a=2;a<o;a++)s[a]=t[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1452:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return a}});var n=t(3117),i=(t(7294),t(3905));const o={sidebar_label:"Querying Recipes"},s="\ud83c\udf7d\ufe0f\xa0Querying Recipes",p={unversionedId:"developers/recipe-query",id:"developers/recipe-query",title:"\ud83c\udf7d\ufe0f\xa0Querying Recipes",description:"\ud83d\udda5 Query recipes",source:"@site/docs/developers/recipe-query.md",sourceDirName:"developers",slug:"/developers/recipe-query",permalink:"/pr-preview/pr-352/developers/recipe-query",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-query.md",tags:[],version:"current",frontMatter:{sidebar_label:"Querying Recipes"},sidebar:"developers",previous:{title:"Keepers",permalink:"/pr-preview/pr-352/developers/recipe-keeper"},next:{title:"Running the Recipes Rollup",permalink:"/pr-preview/pr-352/developers/recipe-rollup"}},c={},a=[{value:"\ud83d\udda5 Query recipes",id:"-query-recipes",level:2}],u={toc:a};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0fquerying-recipes"},"\ud83c\udf7d\ufe0f\xa0Querying Recipes"),(0,i.kt)("h2",{id:"-query-recipes"},"\ud83d\udda5 Query recipes"),(0,i.kt)("p",null,"In order to query your recipes, scaffold a query with Ignite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold query dishes --response dish,ingredients\n")),(0,i.kt)("p",null,"A response on a successful scaffold will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/query.proto\nmodify x/recipes/client/cli/query.go\ncreate x/recipes/client/cli/query_dishes.go\ncreate x/recipes/keeper/grpc_query_dishes.go\n\n\ud83c\udf89 Created a query `dishes`.\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto/recipes/recipes/query.proto")," file import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},'import "recipes/recipes/recipe.proto";\n')),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"request"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesRequest {\n  // Adding pagination to request\n  cosmos.base.query.v1beta1.PageRequest pagination = 1;\n}\n")),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesResponse {\n  // Returning a list of recipes\n  repeated Recipe Recipe = 1;\n\n  // Adding pagination to response\n  cosmos.base.query.v1beta1.PageResponse pagination = 2;\n}\n")),(0,i.kt)("p",null,"In order to implement recipe querying logic in\n",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/grpc_query_dishes.go"),",\ndelete the file contents and replace them with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/grpc_query_dishes.go"',title:'"recipes/x/recipes/keeper/grpc_query_dishes.go"'},'package keeper\n\nimport (\n  "context"\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  "github.com/cosmos/cosmos-sdk/types/query"\n  "google.golang.org/grpc/codes"\n  "google.golang.org/grpc/status"\n\n  "recipes/x/recipes/types"\n)\n\nfunc (k Keeper) Dishes(c context.Context, req *types.QueryDishesRequest) (*types.QueryDishesResponse, error) {\n  // Throw an error if request is nil\n  if req == nil {\n    return nil, status.Error(codes.InvalidArgument, "invalid request")\n  }\n\n  // Define a variable that will store a list of recipes\n  var dishes []*types.Recipe\n\n  // Get context with the information about the environment\n  ctx := sdk.UnwrapSDKContext(c)\n\n  // Get the key-value module store using the store key (in our case store key is "chain")\n  store := ctx.KVStore(k.storeKey)\n\n  // Get the part of the store that keeps recipes (using recipe key, which is "Recipe-value-")\n  recipeStore := prefix.NewStore(store, []byte(types.RecipeKey))\n\n  // Paginate the recipes store based on PageRequest\n  pageRes, err := query.Paginate(recipeStore, req.Pagination, func(key []byte, value []byte) error {\n    var dish types.Recipe\n    if err := k.cdc.Unmarshal(value, &dish); err != nil {\n      return err\n    }\n\n    dishes = append(dishes, &dish)\n\n    return nil\n  })\n\n  // Throw an error if pagination failed\n  if err != nil {\n    return nil, status.Error(codes.Internal, err.Error())\n  }\n\n  // Return a struct containing a list of recipes and pagination info\n  return &types.QueryDishesResponse{Recipe: dishes, Pagination: pageRes}, nil\n}\n')))}l.isMDXComponent=!0}}]);