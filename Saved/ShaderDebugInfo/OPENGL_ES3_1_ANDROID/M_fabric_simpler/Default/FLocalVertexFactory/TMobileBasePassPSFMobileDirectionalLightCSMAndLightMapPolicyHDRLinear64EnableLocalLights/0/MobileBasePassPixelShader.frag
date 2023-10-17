// ! M_fabric_simpler/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndLightMapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_CullingSign(571,1),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_18(72,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:571-0:h:24:1,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:16-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:40-6:h:24:4,6:44-6:h:28:4,6:52-6:h:32:4,6:56-6:h:36:4,6:60-6:h:40:4,6:64-6:h:44:4,6:68-6:h:48:4,6:72-6:h:52:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),MobileReflectionCapture_Texture(3:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(4:1[LightmapResourceCluster_LightMapSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(5:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_CullingSign (pc0_h[6].x)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps3
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps4
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[9];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
uniform mediump vec4 pc4_m[4];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_18 (pc6_h[13])
#define Material_PreshaderBuffer_17 (pc6_h[12])
#define Material_PreshaderBuffer_16 (pc6_h[11])
#define Material_PreshaderBuffer_15 (pc6_h[10])
#define Material_PreshaderBuffer_14 (pc6_h[9])
#define Material_PreshaderBuffer_13 (pc6_h[8])
#define Material_PreshaderBuffer_11 (pc6_h[7])
#define Material_PreshaderBuffer_10 (pc6_h[6])
#define Material_PreshaderBuffer_8 (pc6_h[5])
#define Material_PreshaderBuffer_6 (pc6_h[4])
#define Material_PreshaderBuffer_5 (pc6_h[3])
#define Material_PreshaderBuffer_4 (pc6_h[2])
#define Material_PreshaderBuffer_1 (pc6_h[1])
#define Material_PreshaderBuffer_0 (pc6_h[0])
uniform highp vec4 pc6_h[14];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _535;

void main()
{
    highp float _543 = 1.0 / gl_FragCoord.w;
    highp vec2 _563 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _572 = vec4(((_563 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _543;
    highp vec3 _581;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _581 = -View_ViewForward;
    }
    else
    {
        _581 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _252 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _600 = mix(vec3(0.0, 0.0, 1.0), vec4(_252, sqrt(clamp(1.0 - dot(_252, _252), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_0.x));
    float _91 = _600.z + 1.0;
    highp vec4 _608 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _92 = _608.x;
    vec3 _93 = vec3(_92);
    vec3 _94 = mix(vec3(0.0, 0.0, 1.0), mix(vec3(0.0, 0.0, 1.0), _600, vec3(Material_PreshaderBuffer_0.y)), _93);
    vec3 _99 = vec3(_600.xy, _91);
    vec3 _103 = vec3(_94.xy * vec2(-1.0), _94.z);
    vec3 _109 = (_99 * vec3(dot(_99, _103))) - (vec3(_91) * _103);
    float _111 = _109.z + 1.0;
    vec2 _116 = vec2(in_var_TEXCOORD0[0].x * Material_PreshaderBuffer_0.z, in_var_TEXCOORD0[0].y * Material_PreshaderBuffer_0.w) * vec2(Material_PreshaderBuffer_1.x);
    vec2 _259 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, _116).xy * vec2(2.0)) - vec2(1.0);
    vec3 _118 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_259, sqrt(clamp(1.0 - dot(_259, _259), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.y)), vec3(0.0, 0.0, 1.0), _93);
    float _120 = _118.z + 1.0;
    vec2 _266 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.z)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _124 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_266, sqrt(clamp(1.0 - dot(_266, _266), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.w)), vec3(0.0, 0.0, 1.0), _93);
    vec3 _129 = vec3(_118.xy, _120);
    vec3 _133 = vec3(_124.xy * vec2(-1.0), _124.z);
    vec3 _139 = (_129 * vec3(dot(_129, _133))) - (vec3(_120) * _133);
    vec3 _144 = vec3(_109.xy, _111);
    vec3 _148 = vec3(_139.xy * vec2(-1.0), _139.z);
    vec3 _155 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_144 * vec3(dot(_144, _148))) - (vec3(_111) * _148))) * ((View_CullingSign * (((Primitive_Flags & 64u) != 0u) ? (-1.0) : 1.0)) * float(gl_FrontFacing ? (-1) : 1));
    highp float _642 = dot(_155, _581);
    highp vec3 _645 = (-_581) + ((_155 * _642) * 2.0);
    highp vec4 _661 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, (in_var_TEXCOORD0[0].zw * vec2(Material_PreshaderBuffer_4.x)) + Material_PreshaderBuffer_5.xy);
    float _163 = _661.x;
    float _165 = _661.y;
    float _168 = _661.z;
    highp vec3 _685 = vec3(_92);
    highp vec3 _686 = mix(mix(Material_PreshaderBuffer_11.xyz, ((Material_PreshaderBuffer_6.xyz * vec3(_163)) + (Material_PreshaderBuffer_8.xyz * vec3(_165))) + (Material_PreshaderBuffer_10.xyz * vec3(_168)), vec3(((_163 + _165) + _168) * Material_PreshaderBuffer_10.w)), Material_PreshaderBuffer_13.xyz, _685);
    vec3 _173 = ((texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _116).xyz + vec3(0.00010001659393310546875)) / (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _116, 14.0).xyz + vec3(0.00010001659393310546875))) * _686;
    highp vec3 _690 = mix(_173, _686, vec3(Material_PreshaderBuffer_13.w));
    highp vec3 _694 = mix(_690, _173 * _690, vec3(Material_PreshaderBuffer_14.x));
    highp vec4 _698 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, _116);
    float _175 = _698.x;
    highp float _701 = mix(0.5, _175, Material_PreshaderBuffer_14.y);
    highp float _710 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_14.z)).x, Material_PreshaderBuffer_14.w);
    float _187 = (_701 >= 0.5) ? (1.0 - (((1.0 - _701) * 2.0) * (1.0 - _710))) : ((_701 * 2.0) * _710);
    vec3 _188 = vec3(_187);
    highp float _717 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).x, Material_PreshaderBuffer_15.x);
    vec3 _195 = vec3(1.0) - (((vec3(1.0) - _188) * vec3(2.0)) * vec3(1.0 - _717));
    vec3 _198 = (_188 * vec3(2.0)) * vec3(_717);
    bool _199 = _187 >= 0.5;
    float _202 = _199 ? _195.x : _198.x;
    float _209 = _202 * 2.0;
    highp float _723 = mix(mix(Material_PreshaderBuffer_15.y, 1.0, clamp(_209, 0.0, 1.0)), Material_PreshaderBuffer_15.z, clamp(_209 - 1.0, 0.0, 1.0));
    float _275 = _694.x;
    highp float _725 = (_275 <= 0.0) ? 0.0 : pow(_275, _723);
    float _276 = _694.y;
    highp float _727 = (_276 <= 0.0) ? 0.0 : pow(_276, _723);
    float _273 = _694.z;
    highp float _729 = (_273 <= 0.0) ? 0.0 : pow(_273, _723);
    vec3 _274 = vec3(_725, _727, _729);
    highp vec3 _733 = mix(vec3(0.5), vec3(_202, _199 ? _195.y : _198.y, _199 ? _195.z : _198.z), vec3(Material_PreshaderBuffer_15.w));
    vec3 _218 = vec3(1.0) - (((vec3(1.0) - _274) * vec3(2.0)) * (vec3(1.0) - _733));
    vec3 _220 = (_274 * vec3(2.0)) * _733;
    highp vec3 _734 = mix(vec3((_725 >= 0.5) ? _218.x : _220.x, (_727 >= 0.5) ? _218.y : _220.y, (_729 >= 0.5) ? _218.z : _220.z), Material_PreshaderBuffer_13.xyz, _685);
    vec3 _238 = mix(max(_734, mix(vec3(0.0), texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_16.x)).xxx * _686, vec3(Material_PreshaderBuffer_16.y))), _734, _93);
    float _283 = _238.x;
    float _284 = _238.y;
    float _281 = _238.z;
    float _242 = max(abs(1.0 - max(0.0, _642)), 0.00010001659393310546875);
    highp vec4 _770 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _289 = clamp(mix(_238, vec3((_283 <= 0.0) ? 0.0 : pow(_283, Material_PreshaderBuffer_16.z), (_284 <= 0.0) ? 0.0 : pow(_284, Material_PreshaderBuffer_16.z), (_281 <= 0.0) ? 0.0 : pow(_281, Material_PreshaderBuffer_16.z)), vec3(mix(Material_PreshaderBuffer_17.x, Material_PreshaderBuffer_16.w, _92) * ((((_242 <= 0.0) ? 0.0 : pow(_242, Material_PreshaderBuffer_17.y)) * 0.9599609375) + 0.040008544921875))), vec3(0.0), vec3(1.0));
    float _290 = clamp(Material_PreshaderBuffer_17.z, 0.0, 1.0);
    highp float _776 = max(0.015625, clamp(Material_PreshaderBuffer_18.y * _770.y, 0.0, 1.0));
    float _293 = clamp(_770.x, 0.0, 1.0);
    vec3 _296 = mix(vec3(0.07999999821186065673828125 * clamp(mix(Material_PreshaderBuffer_18.x, Material_PreshaderBuffer_17.w, _175), 0.0, 1.0)), _289, vec3(_290));
    vec3 _70 = _289 - (_289 * _290);
    highp vec2 _779 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _784 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _779);
    highp vec4 _786 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _779 + vec2(0.0, 0.5));
    vec3 _303 = (_784.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _316 = dot(_303, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _315 = (exp2((_316 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_786 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_155.yzx, 1.0)));
    highp float _798 = _572.w;
    highp vec4 _822;
    int _805 = 0;
    for (;;)
    {
        if (_805 < 4)
        {
            if (_798 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_805)])
            {
                _822 = MobileDirectionalLight_DirectionalLightScreenToShadow(_805) * vec4(_572.xy, _798, 1.0);
                break;
            }
            _805++;
            continue;
        }
        else
        {
            _822 = vec4(0.0);
            break;
        }
    }
    float _394;
    if (_822.z > 0.0)
    {
        highp vec2 _832 = (_822.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _833 = fract(_832);
        highp vec2 _837 = (floor(_832) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _843 = vec4((min(1.0 - _822.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _845 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _837, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _843, vec4(0.0), vec4(1.0));
        highp vec4 _850 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _837, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _843, vec4(0.0), vec4(1.0));
        highp vec4 _855 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _837, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _843, vec4(0.0), vec4(1.0));
        highp vec4 _860 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _837, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _843, vec4(0.0), vec4(1.0));
        highp float _862 = _833.x;
        highp float _863 = 1.0 - _862;
        highp vec4 _890 = _535;
        _890.x = (((_845.w * _863) + _845.z) + _850.w) + (_850.z * _862);
        highp vec4 _894 = _890;
        _894.y = (((_845.x * _863) + _845.y) + _850.x) + (_850.y * _862);
        highp vec4 _898 = _894;
        _898.z = (((_855.w * _863) + _855.z) + _860.w) + (_860.z * _862);
        highp vec4 _902 = _898;
        _902.w = (((_855.x * _863) + _855.y) + _860.x) + (_860.y * _862);
        highp float _903 = _833.y;
        highp float _912 = clamp((_798 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _394 = mix(dot(_902, vec4(1.0 - _903, 1.0, 1.0, _903) * 0.111111111938953399658203125), 1.0, _912 * _912);
    }
    else
    {
        _394 = 1.0;
    }
    highp float _935 = max(0.0, dot(_155, normalize(_581 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _337 = _70 * 0.318407952785491943359375;
    highp vec3 _936 = vec3(1.0) * max(0.0, dot(_155, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _338 = _776 * _776;
    highp float _940 = _935 * _338;
    highp float _942 = _338 / ((1.0 - (_935 * _935)) + (_940 * _940));
    float _343 = (_776 * 0.25) + 0.25;
    vec4 _353 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _776) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _354 = _353.x;
    vec2 _364 = (vec2(-1.0400390625, 1.0400390625) * ((min(_354 * _354, exp2((-9.28125) * clamp(abs(dot(_155, _581)) + 1.0013580322265625e-05, 0.0, 1.0))) * _354) + _353.y)) + _353.zw;
    highp vec3 _945 = (_296 * _364.x) + vec3(clamp(50.0 * _296.y, 0.0, 1.0) * _364.y);
    uvec2 _979 = uvec2(uint(_563.x), uint(_563.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _395;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _395 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _645, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_776, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _395 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _645, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_776, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _1026 = ((((min(uint(max(0.0, log2((_543 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _979.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _979.x) * 2u;
    uvec4 _1034 = texelFetch(ps1, int(_1026 + 1u));
    uint _1035 = _1034.x;
    uint _1048 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1049 = min(min(texelFetch(ps1, int(_1026)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1051;
    _1051 = ((((_303 * (_315 / max(9.9999997473787516355514526367188e-06, _316))) * _70) * vec3(_293)) + ((((_337 * _936) * 1.0) + ((_936 * (_945 * (min(_942 * _942, 2048.0) * _343))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * (_394 * mix(1.0, 0.0, dot(vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u)), vec4(1.0))))))) + (((_395 * mix(1.0, min((_315 * _293) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_776 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _293) * _945);
    highp vec3 _1052;
    SPIRV_CROSS_LOOP
    for (uint _1054 = 0u; _1054 < _1049; _1051 = _1052, _1054++)
    {
        uint _1063 = texelFetch(ps2, int(_1035 + _1054)).x * 6u;
        highp vec4 _1065 = texelFetch(ps0, int(_1063));
        highp vec4 _1067 = texelFetch(ps0, int(_1063 + 1u));
        highp vec4 _1069 = texelFetch(ps0, int(_1063 + 2u));
        highp vec4 _1071 = texelFetch(ps0, int(_1063 + 3u));
        highp float _1072 = _1065.w;
        highp float _1073 = _1072 * _1072;
        highp vec3 _1074 = _1065.xyz;
        highp vec3 _1075 = in_var_TEXCOORD8.xyz - _1074;
        if ((dot(_1075, _1075) * _1073) > 1.0)
        {
            _1052 = _1051;
            continue;
        }
        uint _1082 = floatBitsToUint(_1069.w);
        if (((_1082 >> 8u) & _1048) == 0u)
        {
            _1052 = _1051;
            continue;
        }
        highp float _1091 = _1067.w;
        highp vec3 _1107 = _1074 - in_var_TEXCOORD8.xyz;
        highp float _1108 = dot(_1107, _1107);
        highp vec3 _1110 = _1107 * inversesqrt(_1108);
        highp float _1127;
        if (_1091 == 0.0)
        {
            highp float _1119 = _1108 * _1073;
            highp float _1122 = clamp(1.0 - (_1119 * _1119), 0.0, 1.0);
            _1127 = (_1122 * _1122) * (1.0 / (_1108 + 1.0));
        }
        else
        {
            highp vec3 _1114 = _1107 * _1072;
            _1127 = pow(1.0 - clamp(dot(_1114, _1114), 0.0, 1.0), _1091);
        }
        highp float _1138;
        if (((_1082 >> 16u) & 3u) == 2u)
        {
            highp float _1135 = clamp((dot(_1110, _1069.xyz) - _1071.x) * _1071.y, 0.0, 1.0);
            _1138 = _1127 * (_1135 * _1135);
        }
        else
        {
            _1138 = _1127;
        }
        highp vec3 _1160;
        SPIRV_CROSS_BRANCH
        if (_1138 > 0.0)
        {
            highp float _1146 = max(0.0, dot(_155, normalize(_581 + _1110)));
            highp vec3 _1147 = vec3(1.0) * max(0.0, dot(_155, _1110));
            highp float _1151 = _1146 * _338;
            highp float _1153 = _338 / ((1.0 - (_1146 * _1146)) + (_1151 * _1151));
            _1160 = (((_337 * _1147) * 1.0) + ((_1147 * (_945 * (min(_1153 * _1153, 2048.0) * _343))) * 1.0)) * ((_1067.xyz * _1138) * mix(1.0, 0.0, dot(vec4(float((_1082 & 1u) != 0u), float((_1082 & 2u) != 0u), float((_1082 & 4u) != 0u), float((_1082 & 8u) != 0u)), vec4(1.0))));
        }
        else
        {
            _1160 = vec3(0.0);
        }
        _1052 = _1051 + _1160;
    }
    vec3 _73 = _1051 * 1.0;
    vec4 _396 = vec4(_73.x, _73.y, _73.z, _535.w);
    _396.w = 0.0;
    highp vec3 _1163 = min((_396.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1163.x, _1163.y, _1163.z, _396.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

