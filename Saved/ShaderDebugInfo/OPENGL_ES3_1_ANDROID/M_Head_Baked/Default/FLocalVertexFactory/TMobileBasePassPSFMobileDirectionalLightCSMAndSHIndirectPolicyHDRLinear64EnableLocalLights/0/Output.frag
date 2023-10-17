// ! M_Head_Baked/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndSHIndirectPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_SpecularOverrideParameter(552,4),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4),View_SubSurfaceColorAsTransmittanceAtDistanceInMeters(1135,1)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_7(28,4),Material_PreshaderBuffer_9(36,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_12(48,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_19(76,4),Material_PreshaderBuffer_21(84,4),Material_PreshaderBuffer_24(96,4),Material_PreshaderBuffer_25(100,4),Material_PreshaderBuffer_26(104,4),Material_PreshaderBuffer_27(108,4),Material_PreshaderBuffer_28(112,4),Material_PreshaderBuffer_29(116,4),Material_PreshaderBuffer_30(120,4),Material_PreshaderBuffer_31(124,4),Material_PreshaderBuffer_32(128,4),Material_PreshaderBuffer_33(132,4),Material_PreshaderBuffer_34(136,4),Material_PreshaderBuffer_36(144,4),Material_PreshaderBuffer_38(152,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:552-0:m:8:4,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:12:1,0:792-0:h:32:3,0:943-0:h:36:1,0:987-0:h:40:1,0:988-0:h:44:4,0:1135-0:h:48:1,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:8-6:h:0:4,6:12-6:h:4:4,6:20-6:h:8:4,6:28-6:h:12:4,6:36-6:h:16:4,6:40-6:h:20:4,6:48-6:h:24:4,6:56-6:h:28:4,6:60-6:h:32:4,6:68-6:h:36:4,6:76-6:h:40:4,6:84-6:h:44:4,6:96-6:h:48:4,6:100-6:h:52:4,6:104-6:h:56:4,6:108-6:h:60:4,6:112-6:h:64:4,6:116-6:h:68:4,6:120-6:h:72:4,6:124-6:h:76:4,6:128-6:h:80:4,6:132-6:h:84:4,6:136-6:h:88:4,6:144-6:h:92:4,6:152-6:h:96:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_PreIntegratedBRDF(3:1[View_PreIntegratedBRDFSampler]),View_SSProfilesTexture(4:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(5:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(6:1[MobileReflectionCapture_TextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(7:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
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

#define View_SubSurfaceColorAsTransmittanceAtDistanceInMeters (pc0_h[12].x)
#define View_SSProfilesTextureSizeAndInvSize (pc0_h[11])
#define View_bSubsurfacePostprocessEnabled (pc0_h[10].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[3].x)
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_SpecularOverrideParameter (pc0_m[2])
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps4
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps5
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps6
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps16
uniform mediump vec4 pc0_m[4];
uniform highp vec4 pc0_h[13];


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


#define IndirectLightingCache_IndirectLightingSHCoefficients2 (pc4_h[6])
#define IndirectLightingCache_IndirectLightingSHCoefficients1(Offset) (pc4_h[3 + int(Offset)])
#define IndirectLightingCache_IndirectLightingSHCoefficients0(Offset) (pc4_h[0 + int(Offset)])
#define IndirectLightingCache_DirectionalLightShadowing (pc4_m[0].x)
uniform highp vec4 pc4_h[7];
uniform mediump vec4 pc4_m[1];


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


#define Material_PreshaderBuffer_38 (pc6_h[24])
#define Material_PreshaderBuffer_36 (pc6_h[23])
#define Material_PreshaderBuffer_34 (pc6_h[22])
#define Material_PreshaderBuffer_33 (pc6_h[21])
#define Material_PreshaderBuffer_32 (pc6_h[20])
#define Material_PreshaderBuffer_31 (pc6_h[19])
#define Material_PreshaderBuffer_30 (pc6_h[18])
#define Material_PreshaderBuffer_29 (pc6_h[17])
#define Material_PreshaderBuffer_28 (pc6_h[16])
#define Material_PreshaderBuffer_27 (pc6_h[15])
#define Material_PreshaderBuffer_26 (pc6_h[14])
#define Material_PreshaderBuffer_25 (pc6_h[13])
#define Material_PreshaderBuffer_24 (pc6_h[12])
#define Material_PreshaderBuffer_21 (pc6_h[11])
#define Material_PreshaderBuffer_19 (pc6_h[10])
#define Material_PreshaderBuffer_17 (pc6_h[9])
#define Material_PreshaderBuffer_15 (pc6_h[8])
#define Material_PreshaderBuffer_14 (pc6_h[7])
#define Material_PreshaderBuffer_12 (pc6_h[6])
#define Material_PreshaderBuffer_10 (pc6_h[5])
#define Material_PreshaderBuffer_9 (pc6_h[4])
#define Material_PreshaderBuffer_7 (pc6_h[3])
#define Material_PreshaderBuffer_5 (pc6_h[2])
#define Material_PreshaderBuffer_3 (pc6_h[1])
#define Material_PreshaderBuffer_2 (pc6_h[0])
uniform highp vec4 pc6_h[25];


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
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _1357;
vec3 _1359;
vec4 _1360;
float _1361;

void main()
{
    highp float _1371 = 1.0 / gl_FragCoord.w;
    mat3 _87 = mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz);
    highp vec2 _1391 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _1400 = vec4(((_1391 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _1371;
    highp vec3 _1409;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _1409 = -View_ViewForward;
    }
    else
    {
        _1409 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _186 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    float _95 = clamp((1.0 - (abs(in_var_TEXCOORD0[0].y) * 1.015625)) * 10.0, 0.0, 1.0);
    highp vec3 _1424 = mix(Material_PreshaderBuffer_3.xyz, Material_PreshaderBuffer_2.xyz, vec3(_95));
    vec3 _97 = vec4(_186, sqrt(clamp(1.0 - dot(_186, _186), 0.0, 1.0)), 1.0).xyz * _1424;
    float _99 = _97.z + 1.0;
    vec2 _193 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1435 = vec4(_193, sqrt(clamp(1.0 - dot(_193, _193), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _105 = vec3(_97.xy, _99);
    vec3 _109 = vec3(_1435.xy * vec2(-1.0), _1435.z);
    vec3 _116 = vec3(_95);
    highp vec3 _1439 = mix(_97, (_105 * vec3(dot(_105, _109))) - (vec3(_99) * _109), _116) * Material_PreshaderBuffer_7.xyz;
    vec3 _118 = normalize(_87 * _1439) * 1.0;
    highp float _1441 = dot(_118, _1409);
    highp vec3 _1444 = (-_1409) + ((_118 * _1441) * 2.0);
    highp vec4 _1452 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _1458 = Material_PreshaderBuffer_9.z * (Material_PreshaderBuffer_9.y * _1452.x);
    highp float _1468 = Material_PreshaderBuffer_9.z * (_1452.y * Material_PreshaderBuffer_12.x);
    highp float _1478 = (Material_PreshaderBuffer_14.x * _1452.z) * Material_PreshaderBuffer_14.y;
    highp vec3 _1483 = mix(mix(mix(texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz, Material_PreshaderBuffer_10.xyz, vec3(_1458)), Material_PreshaderBuffer_12.yzw, vec3(_1468)), Material_PreshaderBuffer_15.xyz, vec3(_1478));
    highp vec4 _1487 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _123 = _1487.x;
    float _124 = _1487.y;
    highp float _1504 = Material_PreshaderBuffer_24.z * _1487.z;
    highp vec3 _1509 = mix(mix(_1483, mix(mix(_1483, Material_PreshaderBuffer_17.xyz, vec3(_123)), Material_PreshaderBuffer_19.xyz, vec3(_124)), vec3(Material_PreshaderBuffer_21.y)), Material_PreshaderBuffer_25.xyz, vec3(_1504));
    highp float _1516 = Material_PreshaderBuffer_21.y * max(_123, _124);
    highp vec4 _1524 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _130 = _1524.x;
    highp vec4 _1538 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _134 = _1538.y;
    highp float _1551 = Material_PreshaderBuffer_28.w * ((_1538.x * 2.0) * mix(mix(Material_PreshaderBuffer_28.x, Material_PreshaderBuffer_27.w, _134), mix(Material_PreshaderBuffer_28.z, Material_PreshaderBuffer_28.y, _134), _95));
    float _140 = max(abs(1.0 - max(0.0, _1441)), 0.00010001659393310546875);
    bool _1557 = _140 <= 0.0;
    float _141 = mix(_1551, Material_PreshaderBuffer_29.x * _1551, _1557 ? 0.0 : pow(_140, Material_PreshaderBuffer_29.y));
    highp float _1561 = Material_PreshaderBuffer_29.w * _141;
    float _143 = mix(mix(_141, _1561, _1458), _1561, _1468);
    float _144 = mix(_143, _143 * Material_PreshaderBuffer_30.y, _1478);
    float _145 = mix(_144, Material_PreshaderBuffer_30.w * _144, _1516);
    highp float _1576 = Material_PreshaderBuffer_31.w * (((min(max(dot(_1509, vec3(0.2130126953125, 0.71484375, 0.07220458984375)), 0.040008544921875), 0.5498046875) + 0.050018310546875) * 1.49042141437530517578125) + 0.239990234375);
    highp float _1585 = mix(mix(mix(_1576, _1576 * Material_PreshaderBuffer_32.x, _1458), Material_PreshaderBuffer_32.y, _1504), Material_PreshaderBuffer_32.z, _1516);
    highp vec4 _1589 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _155 = _1589.x;
    float _158 = _1589.y;
    float _162 = _1589.z;
    float _165 = _1589.w;
    float _178 = clamp(abs(_1439 * vec3(0.5)).z, 0.0, 1.0);
    highp vec4 _1608 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _180 = _1608.w;
    vec3 _205 = clamp(mix(_1509, vec3(Material_PreshaderBuffer_26.x), vec3(Material_PreshaderBuffer_25.w)), vec3(0.0), vec3(1.0));
    float _206 = clamp(mix(Material_PreshaderBuffer_26.y * clamp(_1516 - _124, 0.0, 1.0), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _207 = clamp(clamp(((_130 <= 0.0) ? 0.0 : pow(_130, mix(Material_PreshaderBuffer_26.w, Material_PreshaderBuffer_26.z, _95))) * Material_PreshaderBuffer_27.x, 0.0, 1.0), 0.0, 1.0);
    highp float _1615 = max(0.015625, clamp(clamp(mix(_145, Material_PreshaderBuffer_31.y * _145, _1504), 0.0, 1.0) * Material_PreshaderBuffer_31.z, 0.0, 1.0));
    float _209 = clamp(mix(mix(_1585, mix(_1585, Material_PreshaderBuffer_33.x, mix(clamp((clamp(_155 * 5.0, 0.0, 1.0) + clamp(_158 * 5.0, 0.0, 1.0)) + (clamp(_162 * 5.0, 0.0, 1.0) + clamp(_165 * 5.0, 0.0, 1.0)), 0.0, 1.0), clamp((_158 + _155) + (_165 + _162), 0.0, 1.0), Material_PreshaderBuffer_32.w)), Material_PreshaderBuffer_33.y), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _210 = clamp(mix(1.0, mix((_178 <= 0.0) ? 0.0 : pow(_178, Material_PreshaderBuffer_34.y), 1.0, _1557 ? 0.0 : pow(_140, 5.0)) * ((_180 <= 0.0) ? 0.0 : pow(_180, Material_PreshaderBuffer_34.z)), _95), 0.0, 1.0);
    bool _1619 = _209 > 0.100000001490116119384765625;
    float _1103;
    vec4 _1122;
    if (_1619)
    {
        highp vec3 _1623 = vec3((vec4(_1359.x, _1359.y, _1359.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_34.x).w) * View_bSubsurfacePostprocessEnabled).w, 0.0, 0.0);
        vec4 _1109 = vec4(_1623.x, _1623.y, _1623.z, vec4(0.0).w);
        _1109.w = _209;
        vec3 _212 = dFdx(_118);
        vec3 _213 = dFdy(_118);
        _1122 = _1109;
        _1103 = clamp(pow(max(dot(_212, _212), dot(_213, _213)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    }
    else
    {
        _1122 = vec4(0.0);
        _1103 = 0.0;
    }
    uint _1708;
    uint _1628 = _1619 ? 5u : 1u;
    vec3 _218 = vec3(_206);
    vec3 _219 = mix(vec3(0.07999999821186065673828125 * _207), _205, _218);
    vec3 _72 = _205 - (_205 * _206);
    highp vec3 _1635 = ((vec3(-0.5) + texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz) * vec3(2.0)) * Material_PreshaderBuffer_36.xyz;
    float _225 = _1635.z + 1.0;
    vec2 _271 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _227 = vec4(_271, sqrt(clamp(1.0 - dot(_271, _271), 0.0, 1.0)), 1.0).xyz * _1424;
    float _229 = _227.z + 1.0;
    vec2 _278 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1646 = vec4(_278, sqrt(clamp(1.0 - dot(_278, _278), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _235 = vec3(_227.xy, _229);
    vec3 _239 = vec3(_1646.xy * vec2(-1.0), _1646.z);
    highp vec3 _1647 = mix(_227, (_235 * vec3(dot(_235, _239))) - (vec3(_229) * _239), _116) * Material_PreshaderBuffer_7.xyz;
    highp vec3 _1651 = ((_1647 * _1647) * vec3(ivec3(sign(_1647)))) * Material_PreshaderBuffer_38.xyz;
    vec3 _256 = vec3(_1635.xy, _225);
    vec3 _260 = vec3(_1651.xy * vec2(-1.0), _1651.z);
    highp float _1656 = (0.75 + (1.25 * sqrt(1.0 - _210))) / _210;
    highp vec3 _1660 = (_118 * 2.132999897003173828125) + (normalize(_87 * normalize(mix(vec3(0.0, 0.0, 1.0), (_256 * vec3(dot(_256, _260))) - (vec3(_225) * _260), _116))) * _1656);
    highp float _1661 = length(_1660);
    highp vec3 _1663 = _1660 / vec3(_1661);
    float _290 = _1663.y;
    vec4 _1110 = _1360;
    _1110.y = (-0.48860299587249755859375) * _290;
    float _291 = _1663.z;
    vec4 _1111 = _1110;
    _1111.z = 0.48860299587249755859375 * _291;
    float _292 = _1663.x;
    vec4 _1112 = _1111;
    _1112.w = (-0.48860299587249755859375) * _292;
    vec3 _293 = _1663 * _1663;
    vec4 _1113 = _1357;
    _1113.x = (1.09254801273345947265625 * _292) * _290;
    vec4 _1114 = _1113;
    _1114.y = ((-1.09254801273345947265625) * _290) * _291;
    vec4 _1115 = _1114;
    _1115.z = 0.3153919875621795654296875 * ((3.0 * _293.z) - 1.0);
    vec4 _1116 = _1115;
    _1116.w = ((-1.09254801273345947265625) * _292) * _291;
    vec4 _1117 = _1112;
    _1117.x = 0.885601043701171875;
    vec3 _286 = _1117.yzw * 2.09375;
    vec4 _287 = vec4(_1117.x, _286.x, _286.y, _286.z);
    vec4 _288 = _1116 * 0.78515625;
    float _289 = (_293.x - _293.y) * 0.4289104640483856201171875;
    vec3 _1118 = vec3(0.0);
    _1118.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _287) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _288)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _289);
    vec3 _1119 = _1118;
    _1119.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _287) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _288)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _289);
    vec3 _1120 = _1119;
    _1120.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _287) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _288)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _289);
    vec3 _284 = max(vec3(0.0), _1120);
    vec4 _1102;
    do
    {
        _1708 = Primitive_Flags;
        if (((_1708 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _1102 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _1102 = vec4(1.0);
        break;
    } while(false);
    highp float _1716 = _1400.w;
    highp vec4 _1740;
    int _1723 = 0;
    for (;;)
    {
        if (_1723 < 4)
        {
            if (_1716 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_1723)])
            {
                _1740 = MobileDirectionalLight_DirectionalLightScreenToShadow(_1723) * vec4(_1400.xy, _1716, 1.0);
                break;
            }
            _1723++;
            continue;
        }
        else
        {
            _1740 = vec4(0.0);
            break;
        }
    }
    float _1104;
    if (_1740.z > 0.0)
    {
        highp vec2 _1750 = (_1740.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _1751 = fract(_1750);
        highp vec2 _1755 = (floor(_1750) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _1761 = vec4((min(1.0 - _1740.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _1763 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1755, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1761, vec4(0.0), vec4(1.0));
        highp vec4 _1768 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1755, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1761, vec4(0.0), vec4(1.0));
        highp vec4 _1773 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1755, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1761, vec4(0.0), vec4(1.0));
        highp vec4 _1778 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1755, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1761, vec4(0.0), vec4(1.0));
        highp float _1780 = _1751.x;
        highp float _1781 = 1.0 - _1780;
        highp vec4 _1808 = _1357;
        _1808.x = (((_1763.w * _1781) + _1763.z) + _1768.w) + (_1768.z * _1780);
        highp vec4 _1812 = _1808;
        _1812.y = (((_1763.x * _1781) + _1763.y) + _1768.x) + (_1768.y * _1780);
        highp vec4 _1816 = _1812;
        _1816.z = (((_1773.w * _1781) + _1773.z) + _1778.w) + (_1778.z * _1780);
        highp vec4 _1820 = _1816;
        _1820.w = (((_1773.x * _1781) + _1773.y) + _1778.x) + (_1778.y * _1780);
        highp float _1821 = _1751.y;
        highp float _1830 = clamp((_1716 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _1104 = mix(dot(_1820, vec4(1.0 - _1821, 1.0, 1.0, _1821) * 0.111111111938953399658203125), 1.0, _1830 * _1830);
    }
    else
    {
        _1104 = 1.0;
    }
    highp vec4 _1849 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _330 = _1104 * mix(1.0, dot(_1102, _1849), dot(_1849, vec4(1.0)));
    highp float _1850 = dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _1851 = max(0.0, _1850);
    highp vec3 _2530;
    highp vec3 _2531;
    highp vec3 _2532;
    switch (_1628)
    {
        case 1u:
        {
        }
        case 10u:
        {
        }
        case 11u:
        {
            highp float _2517 = max(0.0, dot(_118, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2518 = vec3(1.0) * _1851;
            float _636 = _1615 * _1615;
            highp float _2522 = _2517 * _636;
            highp float _2524 = _636 / ((1.0 - (_2517 * _2517)) + (_2522 * _2522));
            vec4 _651 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _652 = _651.x;
            vec2 _662 = (vec2(-1.0400390625, 1.0400390625) * ((min(_652 * _652, exp2((-9.28125) * clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _652) + _651.y)) + _651.zw;
            _2530 = ((_72 * 0.318407952785491943359375) * _2518) * 1.0;
            _2531 = _2518 * (((_219 * _662.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _662.y)) * (min(_2524 * _2524, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = vec3(0.0);
            break;
        }
        case 2u:
        {
            highp float _2419 = max(0.0, dot(_118, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2420 = vec3(1.0) * _1851;
            float _601 = _1615 * _1615;
            highp float _2424 = _2419 * _601;
            highp float _2426 = _601 / ((1.0 - (_2419 * _2419)) + (_2424 * _2424));
            vec4 _616 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _617 = _616.x;
            vec2 _627 = (vec2(-1.0400390625, 1.0400390625) * ((min(_617 * _617, exp2((-9.28125) * clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _617) + _616.y)) + _616.zw;
            highp vec3 _2432 = _1122.xyz * _1122.xyz;
            highp vec3 _2451 = exp((-((-log(clamp(_2432, vec3(9.9999999600419720025001879548654e-13), vec3(1.0)))) / vec3(max(9.9999999600419720025001879548654e-13, View_SubSurfaceColorAsTransmittanceAtDistanceInMeters)))) * 1.0);
            highp float _2452 = _2451.y;
            highp float _2453 = _2451.z;
            highp vec4 _2458 = mix(vec4(_2452, _2453, 0.0, -0.3333333432674407958984375), vec4(_2453, _2452, -1.0, 0.666666686534881591796875), bvec4(_2452 < _2453));
            highp float _2459 = _2451.x;
            highp float _2460 = _2458.x;
            highp vec4 _2468 = mix(vec4(_2459, _2458.yz, _2460), vec4(_2460, _2458.yw, _2459), bvec4(_2459 < _2460));
            highp float _2469 = _2468.x;
            highp float _2470 = _2468.w;
            highp float _2471 = _2468.y;
            highp float _2473 = _2469 - min(_2470, _2471);
            highp float _2483 = _2432.y;
            highp float _2484 = _2432.z;
            highp vec4 _2489 = mix(vec4(_2483, _2484, 0.0, -0.3333333432674407958984375), vec4(_2484, _2483, -1.0, 0.666666686534881591796875), bvec4(_2483 < _2484));
            highp float _2490 = _2432.x;
            highp float _2491 = _2489.x;
            highp float _2498 = abs(((_2470 - _2471) / ((6.0 * _2473) + 1.0000000133514319600180897396058e-10)) + _2468.z) * 6.0;
            _2530 = ((_72 * 0.318407952785491943359375) * _2420) * 1.0;
            _2531 = _2420 * (((_219 * _627.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _627.y)) * (min(_2426 * _2426, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = (vec3(1.0) * mix((_210 * mix(1.0, pow(clamp((dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1122.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz, -_1409), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1122.w))) * mix((((clamp(vec3(abs(_2498 - 3.0) - 1.0, 2.0 - abs(_2498 - 2.0), 2.0 - abs(_2498 - 4.0)), vec3(0.0), vec3(1.0)) - vec3(1.0)) * (_2473 / (_2469 + 1.0000000133514319600180897396058e-10))) + vec3(1.0)) * mix(vec4(_2490, _1361, _1361, _2491), vec4(_2491, _1361, _1361, _2490), bvec4(_2490 < _2491)).x, _2432, vec3(_1104));
            break;
        }
        case 3u:
        {
            highp float _2398 = max(0.0, dot(_118, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2399 = vec3(1.0) * _1851;
            float _555 = _1615 * _1615;
            highp float _2403 = _2398 * _555;
            highp float _2405 = _555 / ((1.0 - (_2398 * _2398)) + (_2403 * _2403));
            vec4 _570 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _571 = _570.x;
            vec2 _581 = (vec2(-1.0400390625, 1.0400390625) * ((min(_571 * _571, exp2((-9.28125) * clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _571) + _570.y)) + _570.zw;
            _2530 = ((_72 * 0.318407952785491943359375) * _2399) * 1.0;
            _2531 = _2399 * (((_219 * _581.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _581.y)) * (min(_2405 * _2405, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1122.w), 0.0).xyz * (_1122.xyz * _1122.xyz);
            break;
        }
        case 4u:
        {
            highp float _2299 = max(_1122.y, 0.0199999995529651641845703125);
            float _511 = dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _512 = dot(_118, _1409);
            float _513 = dot(_1409, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _516 = inversesqrt(2.0 + (2.0 * _513));
            highp float _2301 = clamp((_511 + _512) * _516, 0.0, 1.0);
            highp float _2304 = clamp(_516 + (_516 * _513), 0.0, 1.0);
            float _500 = _2299 * _2299;
            float _503 = clamp(abs(_512) + 1.0013580322265625e-05, 0.0, 1.0);
            float _504 = 1.0 - _2304;
            highp float _2305 = _504 * _504;
            highp float _2307 = (_2305 * _2305) * _504;
            highp float _2310 = _2307 + ((1.0 - _2307) * 0.039999999105930328369140625);
            highp float _2312 = sqrt(_500 * _500);
            highp float _2313 = 1.0 - _2312;
            highp float _2323 = 1.0 - (_2301 * _2301);
            highp float _2324 = _2301 * _500;
            highp float _2326 = _500 / (_2323 + (_2324 * _2324));
            highp float _2331 = 1.0 - _2310;
            float _534 = ((0.6298828125 - (0.219970703125 * _2304)) * _2304) - 0.7451171875;
            float _521 = _534 * _2301;
            float _524 = clamp((0.66650390625 * _503) - _521, 0.00100040435791015625, 1.0);
            highp vec3 _2347;
            if (_206 > 0.0)
            {
                _2347 = mix(vec3(1.0), exp(-((log(_205 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _524) + (1.0 / clamp((0.66650390625 * _511) - _521, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_206));
            }
            else
            {
                _2347 = vec3(1.0);
            }
            highp vec3 _2350 = ((vec3(1.0) * _1851) * (_72 * 0.318407952785491943359375)) * 1.0;
            highp vec3 _2351 = _2347 * (_2331 * _2331);
            highp float _2353 = _1615 * _1615;
            highp float _2355 = sqrt(_2353 * _2353);
            highp float _2356 = 1.0 - _2355;
            float _537 = _1615 * _1615;
            highp float _2365 = _2301 * _537;
            highp float _2367 = _537 / (_2323 + (_2365 * _2365));
            highp float _2368 = 1.0 - clamp((0.66650390625 * _2304) - _534, 0.0, 1.0);
            highp float _2369 = _2368 * _2368;
            highp float _2371 = (_2369 * _2369) * _2368;
            highp float _2374 = clamp(50.0 * _219.y, 0.0, 1.0);
            highp float _2380 = 1.0 - _2304;
            highp float _2381 = _2380 * _2380;
            highp float _2383 = (_2381 * _2381) * _2380;
            _2530 = mix(_2350, _2351 * _2350, vec3(_1122.x));
            _2531 = ((vec3(1.0) * _1122.x) * (_1851 * ((min(_2326 * _2326, 2048.0) * clamp(0.5 / ((_1851 * ((_503 * _2313) + _2312)) + (_503 * ((_1851 * _2313) + _2312))), 0.0, 1.0)) * _2310))) + ((vec3(1.0) * ((_1851 * min(_2367 * _2367, 2048.0)) * clamp(0.5 / ((_1851 * ((_524 * _2356) + _2355)) + (_524 * ((_1851 * _2356) + _2355))), 0.0, 1.0))) * mix(vec3(_2374 * _2383) + (_219 * (1.0 - _2383)), _2351 * (vec3(_2374 * _2371) + (_219 * (1.0 - _2371))), vec3(_1122.x)));
            _2532 = vec3(0.0);
            break;
        }
        case 5u:
        {
            highp float _2241 = max(0.0, dot(_118, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            uint _2244 = uint((_1122.x * 255.0) + 0.5);
            highp vec4 _2255 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _2244)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
            highp float _2258 = clamp((_1122.w - 0.0999755859375) * 10.0, 0.0, 1.0);
            float _459 = _2255.z;
            highp float _2262 = max(clamp(_1615 * mix(1.0, _2255.x * 2.0, _2258), 0.0, 1.0), 0.0199999995529651641845703125);
            float _463 = clamp(_1615 * mix(1.0, _2255.y * 2.0, _2258), 0.0, 1.0);
            float _447 = mix(_2262, _463, _459);
            float _448 = dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp vec3 _2281 = vec3(1.0) * _1851;
            highp float _2286 = 1.0 - (_2241 * _2241);
            float _467 = _2262 * _2262;
            highp float _2287 = _2241 * _467;
            highp float _2289 = _467 / (_2286 + (_2287 * _2287));
            float _471 = _463 * _463;
            highp float _2290 = _2241 * _471;
            highp float _2292 = _471 / (_2286 + (_2290 * _2290));
            vec4 _486 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _447) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _487 = _486.x;
            vec2 _497 = (vec2(-1.0400390625, 1.0400390625) * ((min(_487 * _487, exp2((-9.28125) * clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _487) + _486.y)) + _486.zw;
            _2530 = (mix(_2281 * _330, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_448 - (max(2.0 * _448, 0.4000000059604644775390625) * (1.0 - sqrt(_330))), -1.0) * 0.5) + 0.5, _1103, float(_2244)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2244)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_72 * 0.318407952785491943359375)) * 1.0;
            _2531 = _2281 * (((_219 * _497.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _497.y)) * (mix(min(_2289 * _2289, 2048.0), min(_2292 * _2292, 2048.0), _459) * ((_447 * 0.25) + 0.25)));
            _2532 = vec3(0.0);
            break;
        }
        case 6u:
        {
            highp float _2216 = max(0.0, dot(_118, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2217 = vec3(1.0) * _1851;
            float _412 = _1615 * _1615;
            highp float _2221 = _2216 * _412;
            highp float _2223 = _412 / ((1.0 - (_2216 * _2216)) + (_2221 * _2221));
            vec4 _427 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _428 = _427.x;
            vec2 _438 = (vec2(-1.0400390625, 1.0400390625) * ((min(_428 * _428, exp2((-9.28125) * clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _428) + _427.y)) + _427.zw;
            float _404 = clamp(-dot(_1409, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0);
            highp float _2234 = _404 * 0.3601171970367431640625;
            highp float _2236 = 0.3601171970367431640625 / ((1.0 - (_404 * _404)) + (_2234 * _2234));
            _2530 = ((_72 * 0.318407952785491943359375) * _2217) * 1.0;
            _2531 = _2217 * (((_219 * _438.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _438.y)) * (min(_2223 * _2223, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = (vec3(1.0) * (clamp((0.5 - dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_2236 * _2236, 2048.0))) * (_1122.xyz * _1122.xyz);
            break;
        }
        case 7u:
        {
            highp float _2032 = clamp(_1615, 0.0039215688593685626983642578125, 1.0);
            highp float _2033 = dot(_1409, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _2034 = clamp(_1850, -1.0, 1.0);
            highp float _2035 = clamp(_1441, -1.0, 1.0);
            highp float _2036 = abs(_2035);
            highp float _2041 = (((-0.15658299624919891357421875) * _2036) + 1.5703125) * sqrt(1.0 - _2036);
            highp float _2046 = abs(_2034);
            highp float _2051 = (((-0.15658299624919891357421875) * _2046) + 1.5703125) * sqrt(1.0 - _2046);
            highp float _2059 = cos(0.5 * abs((1.5703125 - ((_2035 >= 0.0) ? _2041 : (3.140625 - _2041))) - (1.5703125 - ((_2034 >= 0.0) ? _2051 : (3.140625 - _2051)))));
            highp vec3 _2061 = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz - (_118 * _2034);
            highp vec3 _2063 = _1409 - (_118 * _2035);
            highp float _2070 = dot(_2061, _2063) * inversesqrt((dot(_2061, _2061) * dot(_2063, _2063)) + 9.9999997473787516355514526367188e-05);
            highp float _2074 = sqrt(clamp(0.5 + (0.5 * _2070), 0.0, 1.0));
            highp float _2078 = _2032 * _2032;
            highp float _2079 = _2078 * 0.5;
            highp float _2080 = _2078 * 2.0;
            highp float _2090 = _2078 * (1.41421353816986083984375 * _2074);
            highp float _2091 = _2034 + _2035;
            highp float _2092 = _2091 - ((-0.1398856937885284423828125) * (((0.997551023960113525390625 * _2074) * sqrt(1.0 - (_2035 * _2035))) + ((-0.06994284689426422119140625) * _2035)));
            highp float _2105 = 1.0 - sqrt(clamp(0.5 + (0.5 * _2033), 0.0, 1.0));
            highp float _2106 = _2105 * _2105;
            highp float _2119 = _2091 - 0.0350000001490116119384765625;
            highp float _2127 = 1.0 / ((1.190000057220458984375 / _2059) + (0.36000001430511474609375 * _2059));
            highp float _2132 = _2074 * (1.0 + (_2127 * (0.60000002384185791015625 - (0.800000011920928955078125 * _2070))));
            highp float _2138 = 1.0 - (_2059 * sqrt(clamp(1.0 - (_2132 * _2132), 0.0, 1.0)));
            highp float _2139 = _2138 * _2138;
            highp float _2143 = 0.95347940921783447265625 - (0.95347940921783447265625 * ((_2139 * _2139) * _2138));
            vec3 _397 = abs(_205);
            highp float _2145 = _2132 * _2127;
            highp float _2161 = _2091 - 0.14000000059604644775390625;
            highp float _2170 = 1.0 - (_2059 * 0.5);
            highp float _2171 = _2170 * _2170;
            highp float _2174 = 0.95347940921783447265625 * ((_2171 * _2171) * _2170);
            highp float _2176 = 0.95347940921783447265625 - _2174;
            highp vec3 _2189 = ((vec3(((((exp(((-0.5) * (_2092 * _2092)) / (_2090 * _2090)) / (2.506242275238037109375 * _2090)) * (0.25 * _2074)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_2106 * _2106) * _2105)))) * (_207 * 2.0)) * mix(1.0, 1.0, clamp(-_2033, 0.0, 1.0))) + ((pow(_397, vec3((0.5 * sqrt(1.0 - (_2145 * _2145))) / _2059)) * (((exp(((-0.5) * (_2119 * _2119)) / (_2079 * _2079)) / (_2078 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _2070) - 3.980000019073486328125)) * (_2143 * _2143))) * 1.0)) + (pow(_397, vec3(0.800000011920928955078125 / _2059)) * (((exp(((-0.5) * (_2161 * _2161)) / (_2080 * _2080)) / (_2078 * 5.01248455047607421875)) * exp((17.0 * _2070) - 16.7800006866455078125)) * ((_2176 * _2176) * (0.0465205647051334381103515625 + _2174))))) * _330;
            _2530 = vec3(0.0);
            _2531 = vec3(0.0);
            _2532 = -min(-(_2189 + ((sqrt(_397) * ((0.318359375 * mix(clamp((dot(normalize(_1409 - (_118 * dot(_1409, _118))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_1850), 0.3300000131130218505859375)) * _206)) * pow(abs(_205 / vec3(dot(_205, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _330)))), vec3(0.0));
            break;
        }
        case 8u:
        {
            highp vec3 _1978 = _1122.xyz * _1122.xyz;
            float _360 = clamp(_1122.w, 0.0, 1.0);
            vec3 _367 = normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1980 = max(0.0, dot(_118, _367));
            float _363 = clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0);
            highp vec3 _1983 = vec3(1.0) * _1851;
            float _368 = _1615 * _1615;
            highp float _1986 = _1980 * _368;
            highp float _1988 = _368 / ((1.0 - (_1980 * _1980)) + (_1986 * _1986));
            vec4 _383 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _384 = _383.x;
            vec2 _394 = (vec2(-1.0400390625, 1.0400390625) * ((min(_384 * _384, exp2((-9.28125) * _363)) * _384) + _383.y)) + _383.zw;
            highp float _1993 = _1615 * _1615;
            highp float _1994 = _1993 * _1993;
            highp float _1998 = ((_1980 - (_1994 * _1980)) * _1980) + _1994;
            highp float _1999 = 4.0 * _1994;
            highp float _2012 = 1.0 - max(0.0, dot(_1409, _367));
            highp float _2013 = _2012 * _2012;
            highp float _2015 = (_2013 * _2013) * _2012;
            _2530 = (_1983 * (_72 * 0.318407952785491943359375)) * mix(1.0, 1.0, _360);
            _2531 = mix(_1983 * (((_219 * _394.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _394.y)) * (min(_1988 * _1988, 2048.0) * ((_1615 * 0.25) + 0.25))), (_1983 * (((0.318407952785491943359375 / (1.0 + _1999)) * (1.0 + ((_1999 * _1994) / (_1998 * _1998)))) * clamp(0.25 / ((_1851 + _363) - (_1851 * _363)), 0.0, 1.0))) * (vec3(clamp(50.0 * _1978.y, 0.0, 1.0) * _2015) + (_1978 * (1.0 - _2015))), vec3(_360));
            _2532 = vec3(0.0);
            break;
        }
        case 9u:
        {
            vec2 _333 = (_1122.yz * 2.0) - vec2(1.0);
            highp float _1866 = dot(vec2(1.0), abs(_333));
            highp vec3 _1870 = vec3(_333, 1.0 - _1866);
            highp float _1872 = max(_1866 - 1.0, 0.0);
            highp vec2 _1873 = _1870.xy;
            bvec2 _1874 = greaterThanEqual(_1873, vec2(0.0));
            highp float _1875 = -_1872;
            highp vec2 _1881 = _1873 + vec2(_1874.x ? _1875 : _1872, _1874.y ? _1875 : _1872);
            highp vec3 _1883 = normalize(vec3(_1881.x, _1881.y, _1870.z));
            highp float _1884 = 1.0 - _1122.w;
            vec3 _348 = normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1890 = max(0.0, dot(_118, _348));
            float _338 = clamp(abs(dot(_118, _1409)) + 1.0013580322265625e-05, 0.0, 1.0);
            float _340 = 1.0 - max(0.0, dot(_1409, _348));
            highp float _1893 = _340 * _340;
            highp float _1895 = (_1893 * _1893) * _340;
            highp float _1898 = _1895 + ((1.0 - _1895) * (_207 * 0.08001708984375));
            highp float _1899 = _1615 * _1615;
            highp float _1901 = sqrt(_1899 * _1899);
            highp float _1902 = 1.0 - _1901;
            float _349 = _1615 * _1615;
            highp float _1913 = _1890 * _349;
            highp float _1915 = _349 / ((1.0 - (_1890 * _1890)) + (_1913 * _1913));
            highp float _1921 = dot(_1883, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1922 = clamp(_1921, 0.0, 1.0);
            highp float _1923 = mix(12.0, 1.0, _1922);
            highp float _1930 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_1923 + 1.0)) * pow(clamp(dot(normalize(mix(_1883, -_118, vec3(_1884 * _206))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0), _1923));
            vec3 _353 = _72 * 0.318407952785491943359375;
            uint _1939 = uint((_1122.x * 255.0) + 0.5);
            highp float _1940 = 1.0 - sqrt(_330);
            float _342 = dot(_118, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1946 = float(_1939);
            _2530 = vec3(0.0);
            _2531 = (((vec3(1.0) * _1851) * min(_1915 * _1915, 2048.0)) * clamp(0.5 / ((_1851 * ((_338 * _1902) + _1901)) + (_338 * ((_1851 * _1902) + _1901))), 0.0, 1.0)) * _1898;
            _2532 = mix(((vec3(1.0) * (mix(_1851, _1922 * _1930, _1884) * (1.0 - _1898))) * _353) * _330, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_342 - (max(2.0 * _342, 0.4000000059604644775390625) * _1940), -1.0) * 0.5) + 0.5, _1103, _1946), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_1921 - (max(2.0 * _1921, 0.4000000059604644775390625) * _1940), -1.0) * _1930) * 0.5) + 0.5, _1103, _1946), 0.0).xyz, vec3(_1884)) * 1.0) * _353, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _1939)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
            break;
        }
        default:
        {
            _2530 = vec3(0.0);
            _2531 = vec3(0.0);
            _2532 = vec3(0.0);
            break;
        }
    }
    uvec2 _2565 = uvec2(uint(_1391.x), uint(_1391.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    float _663 = dot(_118, _1409);
    float _666 = clamp(abs(_663) + 1.0013580322265625e-05, 0.0, 1.0);
    bool _689 = float(MobileReflectionCapture_Params.y > 0.0) != 0.0;
    vec3 _1105;
    if (_689)
    {
        _1105 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1615, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _1105 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1615, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    highp float _2609 = min((dot(_284, vec3(0.300048828125, 0.58984375, 0.1099853515625)) * _210) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z);
    vec3 _692 = (_1105 * mix(1.0, _2609, smoothstep(0.0, 1.0, clamp((_1615 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _210;
    bool _2611 = _1628 == 4u;
    vec3 _1108;
    if (_2611)
    {
        vec3 _1123;
        if (_2611)
        {
            float _733 = (((((_666 * 0.5) + 0.5) * _666) - 1.0) * clamp(1.25 - (1.25 * _1615), 0.0, 1.0)) + 1.0;
            vec3 _734 = _205 * 1.11123168468475341796875;
            float _737 = 1.0 - _666;
            highp float _2630 = _737 * _737;
            highp float _2632 = (_2630 * _2630) * _737;
            _1123 = (mix(vec3(0.07999999821186065673828125 * mix(_207, _733, _1122.x)), mix(_205 * mix(1.0, 1.0 - (_2632 + ((1.0 - _2632) * 0.040008544921875)), _1122.x), ((_734 * (((vec3(1.0) - mix(_734, _734 * _734, vec3(-0.7799999713897705078125))) * ((_666 - 1.0) * 0.85009765625)) + vec3(1.0))) * 0.89990234375) * _733, vec3(_206 * _1122.x)), _218) * View_SpecularOverrideParameter.w) + View_SpecularOverrideParameter.xyz;
        }
        else
        {
            _1123 = _219;
        }
        vec4 _761 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1122.y) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _762 = _761.x;
        float _765 = exp2((-9.28125) * _666);
        vec2 _772 = (vec2(-1.0400390625, 1.0400390625) * ((min(_762 * _762, _765) * _762) + _761.y)) + _761.zw;
        float _671 = ((vec3(0.040008544921875) * _772.x) + vec3(_772.y)).x * _1122.x;
        vec4 _774 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _775 = _774.x;
        vec2 _783 = (vec2(-1.0400390625, 1.0400390625) * ((min(_775 * _775, _765) * _775) + _774.y)) + _774.zw;
        vec3 _1106;
        if (_689)
        {
            _1106 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1122.y, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
        }
        else
        {
            _1106 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1122.y, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
        }
        _1108 = ((_692 * (1.0 - _671)) * ((_1123 * _783.x) + vec3((_783.y * clamp(50.0 * _1123.y, 0.0, 1.0)) * (1.0 - _1122.x)))) + ((_1106 * mix(1.0, _2609, smoothstep(0.0, 1.0, clamp((_1122.y * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * (_671 * _210));
    }
    else
    {
        vec3 _1107;
        if (_1628 == 7u)
        {
            _1107 = vec3(0.0);
        }
        else
        {
            vec4 _713 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _714 = _713.x;
            vec2 _724 = (vec2(-1.0400390625, 1.0400390625) * ((min(_714 * _714, exp2((-9.28125) * _666)) * _714) + _713.y)) + _713.zw;
            _1107 = _692 * ((_219 * _724.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _724.y));
        }
        _1108 = _1107;
    }
    uint _2660 = ((((min(uint(max(0.0, log2((_1371 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _2565.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _2565.x) * 2u;
    uvec4 _2668 = texelFetch(ps1, int(_2660 + 1u));
    uint _2669 = _2668.x;
    uint _2682 = (uint((_1708 & 1024u) != 0u) | (uint((_1708 & 2048u) != 0u) << 1u)) | (uint((_1708 & 4096u) != 0u) << 2u);
    uint _2683 = min(min(texelFetch(ps1, int(_2660)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _2685;
    _2685 = (((_284 * _72) * vec3(clamp((((exp(_1661 - (2.132999897003173828125 + _1656)) * 7.421432018280029296875) / _1661) * (1.0 - exp((-2.0) * _1661))) * 0.422769963741302490234375, 0.0, 1.0))) + ((MobileDirectionalLight_DirectionalLightColor.xyz * _330) * ((_2530 + (_2531 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) + _2532))) + _1108;
    highp vec3 _2686;
    SPIRV_CROSS_LOOP
    for (uint _2688 = 0u; _2688 < _2683; _2685 = _2686, _2688++)
    {
        uint _2697 = texelFetch(ps2, int(_2669 + _2688)).x * 6u;
        highp vec4 _2699 = texelFetch(ps0, int(_2697));
        highp vec4 _2701 = texelFetch(ps0, int(_2697 + 1u));
        highp vec4 _2703 = texelFetch(ps0, int(_2697 + 2u));
        highp vec4 _2705 = texelFetch(ps0, int(_2697 + 3u));
        highp float _2706 = _2699.w;
        highp float _2707 = _2706 * _2706;
        highp vec3 _2708 = _2699.xyz;
        highp vec3 _2709 = in_var_TEXCOORD8.xyz - _2708;
        if ((dot(_2709, _2709) * _2707) > 1.0)
        {
            _2686 = _2685;
            continue;
        }
        uint _2716 = floatBitsToUint(_2703.w);
        if (((_2716 >> 8u) & _2682) == 0u)
        {
            _2686 = _2685;
            continue;
        }
        highp float _2725 = _2701.w;
        highp vec4 _2740 = vec4(float((_2716 & 1u) != 0u), float((_2716 & 2u) != 0u), float((_2716 & 4u) != 0u), float((_2716 & 8u) != 0u));
        highp vec3 _2741 = _2708 - in_var_TEXCOORD8.xyz;
        highp float _2742 = dot(_2741, _2741);
        highp vec3 _2744 = _2741 * inversesqrt(_2742);
        highp float _2761;
        if (_2725 == 0.0)
        {
            highp float _2753 = _2742 * _2707;
            highp float _2756 = clamp(1.0 - (_2753 * _2753), 0.0, 1.0);
            _2761 = (_2756 * _2756) * (1.0 / (_2742 + 1.0));
        }
        else
        {
            highp vec3 _2748 = _2741 * _2706;
            _2761 = pow(1.0 - clamp(dot(_2748, _2748), 0.0, 1.0), _2725);
        }
        highp float _2772;
        if (((_2716 >> 16u) & 3u) == 2u)
        {
            highp float _2769 = clamp((dot(_2744, _2703.xyz) - _2705.x) * _2705.y, 0.0, 1.0);
            _2772 = _2761 * (_2769 * _2769);
        }
        else
        {
            _2772 = _2761;
        }
        highp vec3 _3392;
        SPIRV_CROSS_BRANCH
        if (_2772 > 0.0)
        {
            float _803 = mix(1.0, dot(_1102, _2740), dot(_2740, vec4(1.0)));
            highp float _2777 = dot(_118, _2744);
            highp float _2778 = max(0.0, _2777);
            highp vec3 _3384;
            highp vec3 _3385;
            highp vec3 _3386;
            switch (_1628)
            {
                case 1u:
                {
                }
                case 10u:
                {
                }
                case 11u:
                {
                    highp float _3371 = max(0.0, dot(_118, normalize(_1409 + _2744)));
                    highp vec3 _3372 = vec3(1.0) * _2778;
                    float _1075 = _1615 * _1615;
                    highp float _3376 = _3371 * _1075;
                    highp float _3378 = _1075 / ((1.0 - (_3371 * _3371)) + (_3376 * _3376));
                    vec4 _1090 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1091 = _1090.x;
                    vec2 _1101 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1091 * _1091, exp2((-9.28125) * _666)) * _1091) + _1090.y)) + _1090.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3372) * 1.0;
                    _3385 = _3372 * (((_219 * _1101.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _1101.y)) * (min(_3378 * _3378, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 2u:
                {
                    highp float _3346 = max(0.0, dot(_118, normalize(_1409 + _2744)));
                    highp vec3 _3347 = vec3(1.0) * _2778;
                    float _1044 = _1615 * _1615;
                    highp float _3351 = _3346 * _1044;
                    highp float _3353 = _1044 / ((1.0 - (_3346 * _3346)) + (_3351 * _3351));
                    vec4 _1059 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1060 = _1059.x;
                    vec2 _1070 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1060 * _1060, exp2((-9.28125) * _666)) * _1060) + _1059.y)) + _1059.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3347) * 1.0;
                    _3385 = _3347 * (((_219 * _1070.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _1070.y)) * (min(_3353 * _3353, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = (vec3(1.0) * mix((_210 * mix(1.0, pow(clamp((dot(_118, _2744) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1122.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(_2744, -_1409), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1122.w))) * (_1122.xyz * _1122.xyz);
                    break;
                }
                case 3u:
                {
                    highp float _3325 = max(0.0, dot(_118, normalize(_1409 + _2744)));
                    highp vec3 _3326 = vec3(1.0) * _2778;
                    float _1004 = _1615 * _1615;
                    highp float _3330 = _3325 * _1004;
                    highp float _3332 = _1004 / ((1.0 - (_3325 * _3325)) + (_3330 * _3330));
                    vec4 _1019 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1020 = _1019.x;
                    vec2 _1030 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1020 * _1020, exp2((-9.28125) * _666)) * _1020) + _1019.y)) + _1019.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3326) * 1.0;
                    _3385 = _3326 * (((_219 * _1030.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _1030.y)) * (min(_3332 * _3332, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_118, _2744) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1122.w), 0.0).xyz * (_1122.xyz * _1122.xyz);
                    break;
                }
                case 4u:
                {
                    highp float _3226 = max(_1122.y, 0.0199999995529651641845703125);
                    float _965 = dot(_118, _2744);
                    float _966 = dot(_1409, _2744);
                    float _969 = inversesqrt(2.0 + (2.0 * _966));
                    highp float _3228 = clamp((_965 + _663) * _969, 0.0, 1.0);
                    highp float _3231 = clamp(_969 + (_969 * _966), 0.0, 1.0);
                    float _957 = _3226 * _3226;
                    float _958 = 1.0 - _3231;
                    highp float _3232 = _958 * _958;
                    highp float _3234 = (_3232 * _3232) * _958;
                    highp float _3237 = _3234 + ((1.0 - _3234) * 0.039999999105930328369140625);
                    highp float _3239 = sqrt(_957 * _957);
                    highp float _3240 = 1.0 - _3239;
                    highp float _3250 = 1.0 - (_3228 * _3228);
                    highp float _3251 = _3228 * _957;
                    highp float _3253 = _957 / (_3250 + (_3251 * _3251));
                    highp float _3258 = 1.0 - _3237;
                    float _987 = ((0.6298828125 - (0.219970703125 * _3231)) * _3231) - 0.7451171875;
                    float _974 = _987 * _3228;
                    float _977 = clamp((0.66650390625 * _666) - _974, 0.00100040435791015625, 1.0);
                    highp vec3 _3274;
                    if (_206 > 0.0)
                    {
                        _3274 = mix(vec3(1.0), exp(-((log(_205 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _977) + (1.0 / clamp((0.66650390625 * _965) - _974, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_206));
                    }
                    else
                    {
                        _3274 = vec3(1.0);
                    }
                    highp vec3 _3277 = ((vec3(1.0) * _2778) * (_72 * 0.318407952785491943359375)) * 1.0;
                    highp vec3 _3278 = _3274 * (_3258 * _3258);
                    highp float _3280 = _1615 * _1615;
                    highp float _3282 = sqrt(_3280 * _3280);
                    highp float _3283 = 1.0 - _3282;
                    float _990 = _1615 * _1615;
                    highp float _3292 = _3228 * _990;
                    highp float _3294 = _990 / (_3250 + (_3292 * _3292));
                    highp float _3295 = 1.0 - clamp((0.66650390625 * _3231) - _987, 0.0, 1.0);
                    highp float _3296 = _3295 * _3295;
                    highp float _3298 = (_3296 * _3296) * _3295;
                    highp float _3301 = clamp(50.0 * _219.y, 0.0, 1.0);
                    highp float _3307 = 1.0 - _3231;
                    highp float _3308 = _3307 * _3307;
                    highp float _3310 = (_3308 * _3308) * _3307;
                    _3384 = mix(_3277, _3278 * _3277, vec3(_1122.x));
                    _3385 = ((vec3(1.0) * _1122.x) * (_2778 * ((min(_3253 * _3253, 2048.0) * clamp(0.5 / ((_2778 * ((_666 * _3240) + _3239)) + (_666 * ((_2778 * _3240) + _3239))), 0.0, 1.0)) * _3237))) + ((vec3(1.0) * ((_2778 * min(_3294 * _3294, 2048.0)) * clamp(0.5 / ((_2778 * ((_977 * _3283) + _3282)) + (_977 * ((_2778 * _3283) + _3282))), 0.0, 1.0))) * mix(vec3(_3301 * _3310) + (_219 * (1.0 - _3310)), _3278 * (vec3(_3301 * _3298) + (_219 * (1.0 - _3298))), vec3(_1122.x)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 5u:
                {
                    highp float _3168 = max(0.0, dot(_118, normalize(_1409 + _2744)));
                    uint _3171 = uint((_1122.x * 255.0) + 0.5);
                    highp vec4 _3182 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _3171)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
                    highp float _3185 = clamp((_1122.w - 0.0999755859375) * 10.0, 0.0, 1.0);
                    float _916 = _3182.z;
                    highp float _3189 = max(clamp(_1615 * mix(1.0, _3182.x * 2.0, _3185), 0.0, 1.0), 0.0199999995529651641845703125);
                    float _920 = clamp(_1615 * mix(1.0, _3182.y * 2.0, _3185), 0.0, 1.0);
                    float _905 = mix(_3189, _920, _916);
                    float _906 = dot(_118, _2744);
                    highp vec3 _3208 = vec3(1.0) * _2778;
                    highp float _3213 = 1.0 - (_3168 * _3168);
                    float _924 = _3189 * _3189;
                    highp float _3214 = _3168 * _924;
                    highp float _3216 = _924 / (_3213 + (_3214 * _3214));
                    float _928 = _920 * _920;
                    highp float _3217 = _3168 * _928;
                    highp float _3219 = _928 / (_3213 + (_3217 * _3217));
                    vec4 _943 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _905) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _944 = _943.x;
                    vec2 _954 = (vec2(-1.0400390625, 1.0400390625) * ((min(_944 * _944, exp2((-9.28125) * _666)) * _944) + _943.y)) + _943.zw;
                    _3384 = (mix(_3208 * _803, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_906 - (max(2.0 * _906, 0.4000000059604644775390625) * (1.0 - sqrt(_803))), -1.0) * 0.5) + 0.5, _1103, float(_3171)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _3171)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_72 * 0.318407952785491943359375)) * 1.0;
                    _3385 = _3208 * (((_219 * _954.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _954.y)) * (mix(min(_3216 * _3216, 2048.0), min(_3219 * _3219, 2048.0), _916) * ((_905 * 0.25) + 0.25)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 6u:
                {
                    highp float _3143 = max(0.0, dot(_118, normalize(_1409 + _2744)));
                    highp vec3 _3144 = vec3(1.0) * _2778;
                    float _873 = _1615 * _1615;
                    highp float _3148 = _3143 * _873;
                    highp float _3150 = _873 / ((1.0 - (_3143 * _3143)) + (_3148 * _3148));
                    vec4 _888 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _889 = _888.x;
                    vec2 _899 = (vec2(-1.0400390625, 1.0400390625) * ((min(_889 * _889, exp2((-9.28125) * _666)) * _889) + _888.y)) + _888.zw;
                    float _869 = clamp(-dot(_1409, _2744), 0.0, 1.0);
                    highp float _3161 = _869 * 0.3601171970367431640625;
                    highp float _3163 = 0.3601171970367431640625 / ((1.0 - (_869 * _869)) + (_3161 * _3161));
                    _3384 = ((_72 * 0.318407952785491943359375) * _3144) * 1.0;
                    _3385 = _3144 * (((_219 * _899.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _899.y)) * (min(_3150 * _3150, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = (vec3(1.0) * (clamp((0.5 - dot(_118, _2744)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_3163 * _3163, 2048.0))) * (_1122.xyz * _1122.xyz);
                    break;
                }
                case 7u:
                {
                    highp float _2959 = clamp(_1615, 0.0039215688593685626983642578125, 1.0);
                    highp float _2960 = dot(_1409, _2744);
                    highp float _2961 = clamp(_2777, -1.0, 1.0);
                    highp float _2962 = clamp(_1441, -1.0, 1.0);
                    highp float _2963 = abs(_2962);
                    highp float _2968 = (((-0.15658299624919891357421875) * _2963) + 1.5703125) * sqrt(1.0 - _2963);
                    highp float _2973 = abs(_2961);
                    highp float _2978 = (((-0.15658299624919891357421875) * _2973) + 1.5703125) * sqrt(1.0 - _2973);
                    highp float _2986 = cos(0.5 * abs((1.5703125 - ((_2962 >= 0.0) ? _2968 : (3.140625 - _2968))) - (1.5703125 - ((_2961 >= 0.0) ? _2978 : (3.140625 - _2978)))));
                    highp vec3 _2988 = _2744 - (_118 * _2961);
                    highp vec3 _2990 = _1409 - (_118 * _2962);
                    highp float _2997 = dot(_2988, _2990) * inversesqrt((dot(_2988, _2988) * dot(_2990, _2990)) + 9.9999997473787516355514526367188e-05);
                    highp float _3001 = sqrt(clamp(0.5 + (0.5 * _2997), 0.0, 1.0));
                    highp float _3005 = _2959 * _2959;
                    highp float _3006 = _3005 * 0.5;
                    highp float _3007 = _3005 * 2.0;
                    highp float _3017 = _3005 * (1.41421353816986083984375 * _3001);
                    highp float _3018 = _2961 + _2962;
                    highp float _3019 = _3018 - ((-0.1398856937885284423828125) * (((0.997551023960113525390625 * _3001) * sqrt(1.0 - (_2962 * _2962))) + ((-0.06994284689426422119140625) * _2962)));
                    highp float _3032 = 1.0 - sqrt(clamp(0.5 + (0.5 * _2960), 0.0, 1.0));
                    highp float _3033 = _3032 * _3032;
                    highp float _3046 = _3018 - 0.0350000001490116119384765625;
                    highp float _3054 = 1.0 / ((1.190000057220458984375 / _2986) + (0.36000001430511474609375 * _2986));
                    highp float _3059 = _3001 * (1.0 + (_3054 * (0.60000002384185791015625 - (0.800000011920928955078125 * _2997))));
                    highp float _3065 = 1.0 - (_2986 * sqrt(clamp(1.0 - (_3059 * _3059), 0.0, 1.0)));
                    highp float _3066 = _3065 * _3065;
                    highp float _3070 = 0.95347940921783447265625 - (0.95347940921783447265625 * ((_3066 * _3066) * _3065));
                    vec3 _862 = abs(_205);
                    highp float _3072 = _3059 * _3054;
                    highp float _3088 = _3018 - 0.14000000059604644775390625;
                    highp float _3097 = 1.0 - (_2986 * 0.5);
                    highp float _3098 = _3097 * _3097;
                    highp float _3101 = 0.95347940921783447265625 * ((_3098 * _3098) * _3097);
                    highp float _3103 = 0.95347940921783447265625 - _3101;
                    highp vec3 _3116 = ((vec3(((((exp(((-0.5) * (_3019 * _3019)) / (_3017 * _3017)) / (2.506242275238037109375 * _3017)) * (0.25 * _3001)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_3033 * _3033) * _3032)))) * (_207 * 2.0)) * mix(1.0, 1.0, clamp(-_2960, 0.0, 1.0))) + ((pow(_862, vec3((0.5 * sqrt(1.0 - (_3072 * _3072))) / _2986)) * (((exp(((-0.5) * (_3046 * _3046)) / (_3006 * _3006)) / (_3005 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _2997) - 3.980000019073486328125)) * (_3070 * _3070))) * 1.0)) + (pow(_862, vec3(0.800000011920928955078125 / _2986)) * (((exp(((-0.5) * (_3088 * _3088)) / (_3007 * _3007)) / (_3005 * 5.01248455047607421875)) * exp((17.0 * _2997) - 16.7800006866455078125)) * ((_3103 * _3103) * (0.0465205647051334381103515625 + _3101))))) * _803;
                    _3384 = vec3(0.0);
                    _3385 = vec3(0.0);
                    _3386 = -min(-(_3116 + ((sqrt(_862) * ((0.318359375 * mix(clamp((dot(normalize(_1409 - (_118 * dot(_1409, _118))), _2744) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_2777), 0.3300000131130218505859375)) * _206)) * pow(abs(_205 / vec3(dot(_205, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _803)))), vec3(0.0));
                    break;
                }
                case 8u:
                {
                    highp vec3 _2905 = _1122.xyz * _1122.xyz;
                    float _829 = clamp(_1122.w, 0.0, 1.0);
                    vec3 _832 = normalize(_1409 + _2744);
                    highp float _2907 = max(0.0, dot(_118, _832));
                    highp vec3 _2910 = vec3(1.0) * _2778;
                    float _833 = _1615 * _1615;
                    highp float _2913 = _2907 * _833;
                    highp float _2915 = _833 / ((1.0 - (_2907 * _2907)) + (_2913 * _2913));
                    vec4 _848 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _849 = _848.x;
                    vec2 _859 = (vec2(-1.0400390625, 1.0400390625) * ((min(_849 * _849, exp2((-9.28125) * _666)) * _849) + _848.y)) + _848.zw;
                    highp float _2920 = _1615 * _1615;
                    highp float _2921 = _2920 * _2920;
                    highp float _2925 = ((_2907 - (_2921 * _2907)) * _2907) + _2921;
                    highp float _2926 = 4.0 * _2921;
                    highp float _2939 = 1.0 - max(0.0, dot(_1409, _832));
                    highp float _2940 = _2939 * _2939;
                    highp float _2942 = (_2940 * _2940) * _2939;
                    _3384 = (_2910 * (_72 * 0.318407952785491943359375)) * mix(1.0, 1.0, _829);
                    _3385 = mix(_2910 * (((_219 * _859.x) + vec3(clamp(50.0 * _219.y, 0.0, 1.0) * _859.y)) * (min(_2915 * _2915, 2048.0) * ((_1615 * 0.25) + 0.25))), (_2910 * (((0.318407952785491943359375 / (1.0 + _2926)) * (1.0 + ((_2926 * _2921) / (_2925 * _2925)))) * clamp(0.25 / ((_2778 + _666) - (_2778 * _666)), 0.0, 1.0))) * (vec3(clamp(50.0 * _2905.y, 0.0, 1.0) * _2942) + (_2905 * (1.0 - _2942))), vec3(_829));
                    _3386 = vec3(0.0);
                    break;
                }
                case 9u:
                {
                    vec2 _806 = (_1122.yz * 2.0) - vec2(1.0);
                    highp float _2793 = dot(vec2(1.0), abs(_806));
                    highp vec3 _2797 = vec3(_806, 1.0 - _2793);
                    highp float _2799 = max(_2793 - 1.0, 0.0);
                    highp vec2 _2800 = _2797.xy;
                    bvec2 _2801 = greaterThanEqual(_2800, vec2(0.0));
                    highp float _2802 = -_2799;
                    highp vec2 _2808 = _2800 + vec2(_2801.x ? _2802 : _2799, _2801.y ? _2802 : _2799);
                    highp vec3 _2810 = normalize(vec3(_2808.x, _2808.y, _2797.z));
                    highp float _2811 = 1.0 - _1122.w;
                    vec3 _817 = normalize(_1409 + _2744);
                    highp float _2817 = max(0.0, dot(_118, _817));
                    float _810 = 1.0 - max(0.0, dot(_1409, _817));
                    highp float _2820 = _810 * _810;
                    highp float _2822 = (_2820 * _2820) * _810;
                    highp float _2825 = _2822 + ((1.0 - _2822) * (_207 * 0.08001708984375));
                    highp float _2826 = _1615 * _1615;
                    highp float _2828 = sqrt(_2826 * _2826);
                    highp float _2829 = 1.0 - _2828;
                    float _818 = _1615 * _1615;
                    highp float _2840 = _2817 * _818;
                    highp float _2842 = _818 / ((1.0 - (_2817 * _2817)) + (_2840 * _2840));
                    highp float _2848 = dot(_2810, _2744);
                    highp float _2849 = clamp(_2848, 0.0, 1.0);
                    highp float _2850 = mix(12.0, 1.0, _2849);
                    highp float _2857 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_2850 + 1.0)) * pow(clamp(dot(normalize(mix(_2810, -_118, vec3(_2811 * _206))), _2744), 0.0, 1.0), _2850));
                    vec3 _822 = _72 * 0.318407952785491943359375;
                    uint _2866 = uint((_1122.x * 255.0) + 0.5);
                    highp float _2867 = 1.0 - sqrt(_803);
                    float _812 = dot(_118, _2744);
                    highp float _2873 = float(_2866);
                    _3384 = vec3(0.0);
                    _3385 = (((vec3(1.0) * _2778) * min(_2842 * _2842, 2048.0)) * clamp(0.5 / ((_2778 * ((_666 * _2829) + _2828)) + (_666 * ((_2778 * _2829) + _2828))), 0.0, 1.0)) * _2825;
                    _3386 = mix(((vec3(1.0) * (mix(_2778, _2849 * _2857, _2811) * (1.0 - _2825))) * _822) * _803, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_812 - (max(2.0 * _812, 0.4000000059604644775390625) * _2867), -1.0) * 0.5) + 0.5, _1103, _2873), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_2848 - (max(2.0 * _2848, 0.4000000059604644775390625) * _2867), -1.0) * _2857) * 0.5) + 0.5, _1103, _2873), 0.0).xyz, vec3(_2811)) * 1.0) * _822, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2866)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
                    break;
                }
                default:
                {
                    _3384 = vec3(0.0);
                    _3385 = vec3(0.0);
                    _3386 = vec3(0.0);
                    break;
                }
            }
            _3392 = ((_2701.xyz * _2772) * _803) * ((_3384 + (_3385 * 1.0)) + _3386);
        }
        else
        {
            _3392 = vec3(0.0);
        }
        _2686 = _2685 + _3392;
    }
    vec3 _75 = _2685 * 1.0;
    vec4 _1121 = vec4(_75.x, _75.y, _75.z, _1357.w);
    _1121.w = 0.0;
    highp vec3 _3395 = min((_1121.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_3395.x, _3395.y, _3395.z, _1121.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

