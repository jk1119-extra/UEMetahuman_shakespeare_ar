// ! M_Head_Baked/Default/TGPUSkinVertexFactoryUnlimited/TMobileBasePassPSFMobileDirectionalLightCSMAndSHIndirectPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
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

vec4 _1358;
vec3 _1360;
vec4 _1361;
float _1362;

void main()
{
    highp float _1372 = 1.0 / gl_FragCoord.w;
    mat3 _88 = mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz);
    highp vec2 _1391 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _1400 = vec4(((_1391 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _1372;
    highp vec3 _1409;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _1409 = -View_ViewForward;
    }
    else
    {
        _1409 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _187 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    float _96 = clamp((1.0 - (abs(in_var_TEXCOORD0[0].y) * 1.015625)) * 10.0, 0.0, 1.0);
    highp vec3 _1424 = mix(Material_PreshaderBuffer_3.xyz, Material_PreshaderBuffer_2.xyz, vec3(_96));
    vec3 _98 = vec4(_187, sqrt(clamp(1.0 - dot(_187, _187), 0.0, 1.0)), 1.0).xyz * _1424;
    float _100 = _98.z + 1.0;
    vec2 _194 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1435 = vec4(_194, sqrt(clamp(1.0 - dot(_194, _194), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _106 = vec3(_98.xy, _100);
    vec3 _110 = vec3(_1435.xy * vec2(-1.0), _1435.z);
    vec3 _117 = vec3(_96);
    highp vec3 _1439 = mix(_98, (_106 * vec3(dot(_106, _110))) - (vec3(_100) * _110), _117) * Material_PreshaderBuffer_7.xyz;
    vec3 _119 = normalize(_88 * _1439) * 1.0;
    highp float _1441 = dot(_119, _1409);
    highp vec3 _1444 = (-_1409) + ((_119 * _1441) * 2.0);
    highp vec4 _1452 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _1458 = Material_PreshaderBuffer_9.z * (Material_PreshaderBuffer_9.y * _1452.x);
    highp float _1468 = Material_PreshaderBuffer_9.z * (_1452.y * Material_PreshaderBuffer_12.x);
    highp float _1478 = (Material_PreshaderBuffer_14.x * _1452.z) * Material_PreshaderBuffer_14.y;
    highp vec3 _1483 = mix(mix(mix(texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz, Material_PreshaderBuffer_10.xyz, vec3(_1458)), Material_PreshaderBuffer_12.yzw, vec3(_1468)), Material_PreshaderBuffer_15.xyz, vec3(_1478));
    highp vec4 _1487 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _124 = _1487.x;
    float _125 = _1487.y;
    highp float _1504 = Material_PreshaderBuffer_24.z * _1487.z;
    highp vec3 _1509 = mix(mix(_1483, mix(mix(_1483, Material_PreshaderBuffer_17.xyz, vec3(_124)), Material_PreshaderBuffer_19.xyz, vec3(_125)), vec3(Material_PreshaderBuffer_21.y)), Material_PreshaderBuffer_25.xyz, vec3(_1504));
    highp float _1516 = Material_PreshaderBuffer_21.y * max(_124, _125);
    highp vec4 _1524 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _131 = _1524.x;
    highp vec4 _1538 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _135 = _1538.y;
    highp float _1551 = Material_PreshaderBuffer_28.w * ((_1538.x * 2.0) * mix(mix(Material_PreshaderBuffer_28.x, Material_PreshaderBuffer_27.w, _135), mix(Material_PreshaderBuffer_28.z, Material_PreshaderBuffer_28.y, _135), _96));
    float _141 = max(abs(1.0 - max(0.0, _1441)), 0.00010001659393310546875);
    bool _1557 = _141 <= 0.0;
    float _142 = mix(_1551, Material_PreshaderBuffer_29.x * _1551, _1557 ? 0.0 : pow(_141, Material_PreshaderBuffer_29.y));
    highp float _1561 = Material_PreshaderBuffer_29.w * _142;
    float _144 = mix(mix(_142, _1561, _1458), _1561, _1468);
    float _145 = mix(_144, _144 * Material_PreshaderBuffer_30.y, _1478);
    float _146 = mix(_145, Material_PreshaderBuffer_30.w * _145, _1516);
    highp float _1576 = Material_PreshaderBuffer_31.w * (((min(max(dot(_1509, vec3(0.2130126953125, 0.71484375, 0.07220458984375)), 0.040008544921875), 0.5498046875) + 0.050018310546875) * 1.49042141437530517578125) + 0.239990234375);
    highp float _1585 = mix(mix(mix(_1576, _1576 * Material_PreshaderBuffer_32.x, _1458), Material_PreshaderBuffer_32.y, _1504), Material_PreshaderBuffer_32.z, _1516);
    highp vec4 _1589 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _156 = _1589.x;
    float _159 = _1589.y;
    float _163 = _1589.z;
    float _166 = _1589.w;
    float _179 = clamp(abs(_1439 * vec3(0.5)).z, 0.0, 1.0);
    highp vec4 _1608 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _181 = _1608.w;
    vec3 _206 = clamp(mix(_1509, vec3(Material_PreshaderBuffer_26.x), vec3(Material_PreshaderBuffer_25.w)), vec3(0.0), vec3(1.0));
    float _207 = clamp(mix(Material_PreshaderBuffer_26.y * clamp(_1516 - _125, 0.0, 1.0), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _208 = clamp(clamp(((_131 <= 0.0) ? 0.0 : pow(_131, mix(Material_PreshaderBuffer_26.w, Material_PreshaderBuffer_26.z, _96))) * Material_PreshaderBuffer_27.x, 0.0, 1.0), 0.0, 1.0);
    highp float _1615 = max(0.015625, clamp(clamp(mix(_146, Material_PreshaderBuffer_31.y * _146, _1504), 0.0, 1.0) * Material_PreshaderBuffer_31.z, 0.0, 1.0));
    float _210 = clamp(mix(mix(_1585, mix(_1585, Material_PreshaderBuffer_33.x, mix(clamp((clamp(_156 * 5.0, 0.0, 1.0) + clamp(_159 * 5.0, 0.0, 1.0)) + (clamp(_163 * 5.0, 0.0, 1.0) + clamp(_166 * 5.0, 0.0, 1.0)), 0.0, 1.0), clamp((_159 + _156) + (_166 + _163), 0.0, 1.0), Material_PreshaderBuffer_32.w)), Material_PreshaderBuffer_33.y), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _211 = clamp(mix(1.0, mix((_179 <= 0.0) ? 0.0 : pow(_179, Material_PreshaderBuffer_34.y), 1.0, _1557 ? 0.0 : pow(_141, 5.0)) * ((_181 <= 0.0) ? 0.0 : pow(_181, Material_PreshaderBuffer_34.z)), _96), 0.0, 1.0);
    bool _1619 = _210 > 0.100000001490116119384765625;
    float _1104;
    vec4 _1123;
    if (_1619)
    {
        highp vec3 _1623 = vec3((vec4(_1360.x, _1360.y, _1360.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_34.x).w) * View_bSubsurfacePostprocessEnabled).w, 0.0, 0.0);
        vec4 _1110 = vec4(_1623.x, _1623.y, _1623.z, vec4(0.0).w);
        _1110.w = _210;
        vec3 _213 = dFdx(_119);
        vec3 _214 = dFdy(_119);
        _1123 = _1110;
        _1104 = clamp(pow(max(dot(_213, _213), dot(_214, _214)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    }
    else
    {
        _1123 = vec4(0.0);
        _1104 = 0.0;
    }
    uint _1708;
    uint _1628 = _1619 ? 5u : 1u;
    vec3 _219 = vec3(_207);
    vec3 _220 = mix(vec3(0.07999999821186065673828125 * _208), _206, _219);
    vec3 _72 = _206 - (_206 * _207);
    highp vec3 _1635 = ((vec3(-0.5) + texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz) * vec3(2.0)) * Material_PreshaderBuffer_36.xyz;
    float _226 = _1635.z + 1.0;
    vec2 _272 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _228 = vec4(_272, sqrt(clamp(1.0 - dot(_272, _272), 0.0, 1.0)), 1.0).xyz * _1424;
    float _230 = _228.z + 1.0;
    vec2 _279 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1646 = vec4(_279, sqrt(clamp(1.0 - dot(_279, _279), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _236 = vec3(_228.xy, _230);
    vec3 _240 = vec3(_1646.xy * vec2(-1.0), _1646.z);
    highp vec3 _1647 = mix(_228, (_236 * vec3(dot(_236, _240))) - (vec3(_230) * _240), _117) * Material_PreshaderBuffer_7.xyz;
    highp vec3 _1651 = ((_1647 * _1647) * vec3(ivec3(sign(_1647)))) * Material_PreshaderBuffer_38.xyz;
    vec3 _257 = vec3(_1635.xy, _226);
    vec3 _261 = vec3(_1651.xy * vec2(-1.0), _1651.z);
    highp float _1656 = (0.75 + (1.25 * sqrt(1.0 - _211))) / _211;
    highp vec3 _1660 = (_119 * 2.132999897003173828125) + (normalize(_88 * normalize(mix(vec3(0.0, 0.0, 1.0), (_257 * vec3(dot(_257, _261))) - (vec3(_226) * _261), _117))) * _1656);
    highp float _1661 = length(_1660);
    highp vec3 _1663 = _1660 / vec3(_1661);
    float _291 = _1663.y;
    vec4 _1111 = _1361;
    _1111.y = (-0.48860299587249755859375) * _291;
    float _292 = _1663.z;
    vec4 _1112 = _1111;
    _1112.z = 0.48860299587249755859375 * _292;
    float _293 = _1663.x;
    vec4 _1113 = _1112;
    _1113.w = (-0.48860299587249755859375) * _293;
    vec3 _294 = _1663 * _1663;
    vec4 _1114 = _1358;
    _1114.x = (1.09254801273345947265625 * _293) * _291;
    vec4 _1115 = _1114;
    _1115.y = ((-1.09254801273345947265625) * _291) * _292;
    vec4 _1116 = _1115;
    _1116.z = 0.3153919875621795654296875 * ((3.0 * _294.z) - 1.0);
    vec4 _1117 = _1116;
    _1117.w = ((-1.09254801273345947265625) * _293) * _292;
    vec4 _1118 = _1113;
    _1118.x = 0.885601043701171875;
    vec3 _287 = _1118.yzw * 2.09375;
    vec4 _288 = vec4(_1118.x, _287.x, _287.y, _287.z);
    vec4 _289 = _1117 * 0.78515625;
    float _290 = (_294.x - _294.y) * 0.4289104640483856201171875;
    vec3 _1119 = vec3(0.0);
    _1119.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _288) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _289)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _290);
    vec3 _1120 = _1119;
    _1120.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _288) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _289)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _290);
    vec3 _1121 = _1120;
    _1121.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _288) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _289)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _290);
    vec3 _285 = max(vec3(0.0), _1121);
    vec4 _1103;
    do
    {
        _1708 = Primitive_Flags;
        if (((_1708 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _1103 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _1103 = vec4(1.0);
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
    float _1105;
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
        highp vec4 _1808 = _1358;
        _1808.x = (((_1763.w * _1781) + _1763.z) + _1768.w) + (_1768.z * _1780);
        highp vec4 _1812 = _1808;
        _1812.y = (((_1763.x * _1781) + _1763.y) + _1768.x) + (_1768.y * _1780);
        highp vec4 _1816 = _1812;
        _1816.z = (((_1773.w * _1781) + _1773.z) + _1778.w) + (_1778.z * _1780);
        highp vec4 _1820 = _1816;
        _1820.w = (((_1773.x * _1781) + _1773.y) + _1778.x) + (_1778.y * _1780);
        highp float _1821 = _1751.y;
        highp float _1830 = clamp((_1716 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _1105 = mix(dot(_1820, vec4(1.0 - _1821, 1.0, 1.0, _1821) * 0.111111111938953399658203125), 1.0, _1830 * _1830);
    }
    else
    {
        _1105 = 1.0;
    }
    highp vec4 _1849 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _331 = _1105 * mix(1.0, dot(_1103, _1849), dot(_1849, vec4(1.0)));
    highp float _1850 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
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
            highp float _2517 = max(0.0, dot(_119, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2518 = vec3(1.0) * _1851;
            float _637 = _1615 * _1615;
            highp float _2522 = _2517 * _637;
            highp float _2524 = _637 / ((1.0 - (_2517 * _2517)) + (_2522 * _2522));
            vec4 _652 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _653 = _652.x;
            vec2 _663 = (vec2(-1.0400390625, 1.0400390625) * ((min(_653 * _653, exp2((-9.28125) * clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _653) + _652.y)) + _652.zw;
            _2530 = ((_72 * 0.318407952785491943359375) * _2518) * 1.0;
            _2531 = _2518 * (((_220 * _663.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _663.y)) * (min(_2524 * _2524, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = vec3(0.0);
            break;
        }
        case 2u:
        {
            highp float _2419 = max(0.0, dot(_119, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2420 = vec3(1.0) * _1851;
            float _602 = _1615 * _1615;
            highp float _2424 = _2419 * _602;
            highp float _2426 = _602 / ((1.0 - (_2419 * _2419)) + (_2424 * _2424));
            vec4 _617 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _618 = _617.x;
            vec2 _628 = (vec2(-1.0400390625, 1.0400390625) * ((min(_618 * _618, exp2((-9.28125) * clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _618) + _617.y)) + _617.zw;
            highp vec3 _2432 = _1123.xyz * _1123.xyz;
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
            _2531 = _2420 * (((_220 * _628.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _628.y)) * (min(_2426 * _2426, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = (vec3(1.0) * mix((_211 * mix(1.0, pow(clamp((dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1123.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz, -_1409), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1123.w))) * mix((((clamp(vec3(abs(_2498 - 3.0) - 1.0, 2.0 - abs(_2498 - 2.0), 2.0 - abs(_2498 - 4.0)), vec3(0.0), vec3(1.0)) - vec3(1.0)) * (_2473 / (_2469 + 1.0000000133514319600180897396058e-10))) + vec3(1.0)) * mix(vec4(_2490, _1362, _1362, _2491), vec4(_2491, _1362, _1362, _2490), bvec4(_2490 < _2491)).x, _2432, vec3(_1105));
            break;
        }
        case 3u:
        {
            highp float _2398 = max(0.0, dot(_119, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2399 = vec3(1.0) * _1851;
            float _556 = _1615 * _1615;
            highp float _2403 = _2398 * _556;
            highp float _2405 = _556 / ((1.0 - (_2398 * _2398)) + (_2403 * _2403));
            vec4 _571 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _572 = _571.x;
            vec2 _582 = (vec2(-1.0400390625, 1.0400390625) * ((min(_572 * _572, exp2((-9.28125) * clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _572) + _571.y)) + _571.zw;
            _2530 = ((_72 * 0.318407952785491943359375) * _2399) * 1.0;
            _2531 = _2399 * (((_220 * _582.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _582.y)) * (min(_2405 * _2405, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1123.w), 0.0).xyz * (_1123.xyz * _1123.xyz);
            break;
        }
        case 4u:
        {
            highp float _2299 = max(_1123.y, 0.0199999995529651641845703125);
            float _512 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _513 = dot(_119, _1409);
            float _514 = dot(_1409, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _517 = inversesqrt(2.0 + (2.0 * _514));
            highp float _2301 = clamp((_512 + _513) * _517, 0.0, 1.0);
            highp float _2304 = clamp(_517 + (_517 * _514), 0.0, 1.0);
            float _501 = _2299 * _2299;
            float _504 = clamp(abs(_513) + 1.0013580322265625e-05, 0.0, 1.0);
            float _505 = 1.0 - _2304;
            highp float _2305 = _505 * _505;
            highp float _2307 = (_2305 * _2305) * _505;
            highp float _2310 = _2307 + ((1.0 - _2307) * 0.039999999105930328369140625);
            highp float _2312 = sqrt(_501 * _501);
            highp float _2313 = 1.0 - _2312;
            highp float _2323 = 1.0 - (_2301 * _2301);
            highp float _2324 = _2301 * _501;
            highp float _2326 = _501 / (_2323 + (_2324 * _2324));
            highp float _2331 = 1.0 - _2310;
            float _535 = ((0.6298828125 - (0.219970703125 * _2304)) * _2304) - 0.7451171875;
            float _522 = _535 * _2301;
            float _525 = clamp((0.66650390625 * _504) - _522, 0.00100040435791015625, 1.0);
            highp vec3 _2347;
            if (_207 > 0.0)
            {
                _2347 = mix(vec3(1.0), exp(-((log(_206 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _525) + (1.0 / clamp((0.66650390625 * _512) - _522, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_207));
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
            float _538 = _1615 * _1615;
            highp float _2365 = _2301 * _538;
            highp float _2367 = _538 / (_2323 + (_2365 * _2365));
            highp float _2368 = 1.0 - clamp((0.66650390625 * _2304) - _535, 0.0, 1.0);
            highp float _2369 = _2368 * _2368;
            highp float _2371 = (_2369 * _2369) * _2368;
            highp float _2374 = clamp(50.0 * _220.y, 0.0, 1.0);
            highp float _2380 = 1.0 - _2304;
            highp float _2381 = _2380 * _2380;
            highp float _2383 = (_2381 * _2381) * _2380;
            _2530 = mix(_2350, _2351 * _2350, vec3(_1123.x));
            _2531 = ((vec3(1.0) * _1123.x) * (_1851 * ((min(_2326 * _2326, 2048.0) * clamp(0.5 / ((_1851 * ((_504 * _2313) + _2312)) + (_504 * ((_1851 * _2313) + _2312))), 0.0, 1.0)) * _2310))) + ((vec3(1.0) * ((_1851 * min(_2367 * _2367, 2048.0)) * clamp(0.5 / ((_1851 * ((_525 * _2356) + _2355)) + (_525 * ((_1851 * _2356) + _2355))), 0.0, 1.0))) * mix(vec3(_2374 * _2383) + (_220 * (1.0 - _2383)), _2351 * (vec3(_2374 * _2371) + (_220 * (1.0 - _2371))), vec3(_1123.x)));
            _2532 = vec3(0.0);
            break;
        }
        case 5u:
        {
            highp float _2241 = max(0.0, dot(_119, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            uint _2244 = uint((_1123.x * 255.0) + 0.5);
            highp vec4 _2255 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _2244)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
            highp float _2258 = clamp((_1123.w - 0.0999755859375) * 10.0, 0.0, 1.0);
            float _460 = _2255.z;
            highp float _2262 = max(clamp(_1615 * mix(1.0, _2255.x * 2.0, _2258), 0.0, 1.0), 0.0199999995529651641845703125);
            float _464 = clamp(_1615 * mix(1.0, _2255.y * 2.0, _2258), 0.0, 1.0);
            float _448 = mix(_2262, _464, _460);
            float _449 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp vec3 _2281 = vec3(1.0) * _1851;
            highp float _2286 = 1.0 - (_2241 * _2241);
            float _468 = _2262 * _2262;
            highp float _2287 = _2241 * _468;
            highp float _2289 = _468 / (_2286 + (_2287 * _2287));
            float _472 = _464 * _464;
            highp float _2290 = _2241 * _472;
            highp float _2292 = _472 / (_2286 + (_2290 * _2290));
            vec4 _487 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _448) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _488 = _487.x;
            vec2 _498 = (vec2(-1.0400390625, 1.0400390625) * ((min(_488 * _488, exp2((-9.28125) * clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _488) + _487.y)) + _487.zw;
            _2530 = (mix(_2281 * _331, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_449 - (max(2.0 * _449, 0.4000000059604644775390625) * (1.0 - sqrt(_331))), -1.0) * 0.5) + 0.5, _1104, float(_2244)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2244)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_72 * 0.318407952785491943359375)) * 1.0;
            _2531 = _2281 * (((_220 * _498.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _498.y)) * (mix(min(_2289 * _2289, 2048.0), min(_2292 * _2292, 2048.0), _460) * ((_448 * 0.25) + 0.25)));
            _2532 = vec3(0.0);
            break;
        }
        case 6u:
        {
            highp float _2216 = max(0.0, dot(_119, normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2217 = vec3(1.0) * _1851;
            float _413 = _1615 * _1615;
            highp float _2221 = _2216 * _413;
            highp float _2223 = _413 / ((1.0 - (_2216 * _2216)) + (_2221 * _2221));
            vec4 _428 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _429 = _428.x;
            vec2 _439 = (vec2(-1.0400390625, 1.0400390625) * ((min(_429 * _429, exp2((-9.28125) * clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0))) * _429) + _428.y)) + _428.zw;
            float _405 = clamp(-dot(_1409, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0);
            highp float _2234 = _405 * 0.3601171970367431640625;
            highp float _2236 = 0.3601171970367431640625 / ((1.0 - (_405 * _405)) + (_2234 * _2234));
            _2530 = ((_72 * 0.318407952785491943359375) * _2217) * 1.0;
            _2531 = _2217 * (((_220 * _439.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _439.y)) * (min(_2223 * _2223, 2048.0) * ((_1615 * 0.25) + 0.25)));
            _2532 = (vec3(1.0) * (clamp((0.5 - dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_2236 * _2236, 2048.0))) * (_1123.xyz * _1123.xyz);
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
            highp vec3 _2061 = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz - (_119 * _2034);
            highp vec3 _2063 = _1409 - (_119 * _2035);
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
            vec3 _398 = abs(_206);
            highp float _2145 = _2132 * _2127;
            highp float _2161 = _2091 - 0.14000000059604644775390625;
            highp float _2170 = 1.0 - (_2059 * 0.5);
            highp float _2171 = _2170 * _2170;
            highp float _2174 = 0.95347940921783447265625 * ((_2171 * _2171) * _2170);
            highp float _2176 = 0.95347940921783447265625 - _2174;
            highp vec3 _2189 = ((vec3(((((exp(((-0.5) * (_2092 * _2092)) / (_2090 * _2090)) / (2.506242275238037109375 * _2090)) * (0.25 * _2074)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_2106 * _2106) * _2105)))) * (_208 * 2.0)) * mix(1.0, 1.0, clamp(-_2033, 0.0, 1.0))) + ((pow(_398, vec3((0.5 * sqrt(1.0 - (_2145 * _2145))) / _2059)) * (((exp(((-0.5) * (_2119 * _2119)) / (_2079 * _2079)) / (_2078 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _2070) - 3.980000019073486328125)) * (_2143 * _2143))) * 1.0)) + (pow(_398, vec3(0.800000011920928955078125 / _2059)) * (((exp(((-0.5) * (_2161 * _2161)) / (_2080 * _2080)) / (_2078 * 5.01248455047607421875)) * exp((17.0 * _2070) - 16.7800006866455078125)) * ((_2176 * _2176) * (0.0465205647051334381103515625 + _2174))))) * _331;
            _2530 = vec3(0.0);
            _2531 = vec3(0.0);
            _2532 = -min(-(_2189 + ((sqrt(_398) * ((0.318359375 * mix(clamp((dot(normalize(_1409 - (_119 * dot(_1409, _119))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_1850), 0.3300000131130218505859375)) * _207)) * pow(abs(_206 / vec3(dot(_206, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _331)))), vec3(0.0));
            break;
        }
        case 8u:
        {
            highp vec3 _1978 = _1123.xyz * _1123.xyz;
            float _361 = clamp(_1123.w, 0.0, 1.0);
            vec3 _368 = normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1980 = max(0.0, dot(_119, _368));
            float _364 = clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0);
            highp vec3 _1983 = vec3(1.0) * _1851;
            float _369 = _1615 * _1615;
            highp float _1986 = _1980 * _369;
            highp float _1988 = _369 / ((1.0 - (_1980 * _1980)) + (_1986 * _1986));
            vec4 _384 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _385 = _384.x;
            vec2 _395 = (vec2(-1.0400390625, 1.0400390625) * ((min(_385 * _385, exp2((-9.28125) * _364)) * _385) + _384.y)) + _384.zw;
            highp float _1993 = _1615 * _1615;
            highp float _1994 = _1993 * _1993;
            highp float _1998 = ((_1980 - (_1994 * _1980)) * _1980) + _1994;
            highp float _1999 = 4.0 * _1994;
            highp float _2012 = 1.0 - max(0.0, dot(_1409, _368));
            highp float _2013 = _2012 * _2012;
            highp float _2015 = (_2013 * _2013) * _2012;
            _2530 = (_1983 * (_72 * 0.318407952785491943359375)) * mix(1.0, 1.0, _361);
            _2531 = mix(_1983 * (((_220 * _395.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _395.y)) * (min(_1988 * _1988, 2048.0) * ((_1615 * 0.25) + 0.25))), (_1983 * (((0.318407952785491943359375 / (1.0 + _1999)) * (1.0 + ((_1999 * _1994) / (_1998 * _1998)))) * clamp(0.25 / ((_1851 + _364) - (_1851 * _364)), 0.0, 1.0))) * (vec3(clamp(50.0 * _1978.y, 0.0, 1.0) * _2015) + (_1978 * (1.0 - _2015))), vec3(_361));
            _2532 = vec3(0.0);
            break;
        }
        case 9u:
        {
            vec2 _334 = (_1123.yz * 2.0) - vec2(1.0);
            highp float _1866 = dot(vec2(1.0), abs(_334));
            highp vec3 _1870 = vec3(_334, 1.0 - _1866);
            highp float _1872 = max(_1866 - 1.0, 0.0);
            highp vec2 _1873 = _1870.xy;
            bvec2 _1874 = greaterThanEqual(_1873, vec2(0.0));
            highp float _1875 = -_1872;
            highp vec2 _1881 = _1873 + vec2(_1874.x ? _1875 : _1872, _1874.y ? _1875 : _1872);
            highp vec3 _1883 = normalize(vec3(_1881.x, _1881.y, _1870.z));
            highp float _1884 = 1.0 - _1123.w;
            vec3 _349 = normalize(_1409 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1890 = max(0.0, dot(_119, _349));
            float _339 = clamp(abs(dot(_119, _1409)) + 1.0013580322265625e-05, 0.0, 1.0);
            float _341 = 1.0 - max(0.0, dot(_1409, _349));
            highp float _1893 = _341 * _341;
            highp float _1895 = (_1893 * _1893) * _341;
            highp float _1898 = _1895 + ((1.0 - _1895) * (_208 * 0.08001708984375));
            highp float _1899 = _1615 * _1615;
            highp float _1901 = sqrt(_1899 * _1899);
            highp float _1902 = 1.0 - _1901;
            float _350 = _1615 * _1615;
            highp float _1913 = _1890 * _350;
            highp float _1915 = _350 / ((1.0 - (_1890 * _1890)) + (_1913 * _1913));
            highp float _1921 = dot(_1883, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1922 = clamp(_1921, 0.0, 1.0);
            highp float _1923 = mix(12.0, 1.0, _1922);
            highp float _1930 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_1923 + 1.0)) * pow(clamp(dot(normalize(mix(_1883, -_119, vec3(_1884 * _207))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0), _1923));
            vec3 _354 = _72 * 0.318407952785491943359375;
            uint _1939 = uint((_1123.x * 255.0) + 0.5);
            highp float _1940 = 1.0 - sqrt(_331);
            float _343 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1946 = float(_1939);
            _2530 = vec3(0.0);
            _2531 = (((vec3(1.0) * _1851) * min(_1915 * _1915, 2048.0)) * clamp(0.5 / ((_1851 * ((_339 * _1902) + _1901)) + (_339 * ((_1851 * _1902) + _1901))), 0.0, 1.0)) * _1898;
            _2532 = mix(((vec3(1.0) * (mix(_1851, _1922 * _1930, _1884) * (1.0 - _1898))) * _354) * _331, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_343 - (max(2.0 * _343, 0.4000000059604644775390625) * _1940), -1.0) * 0.5) + 0.5, _1104, _1946), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_1921 - (max(2.0 * _1921, 0.4000000059604644775390625) * _1940), -1.0) * _1930) * 0.5) + 0.5, _1104, _1946), 0.0).xyz, vec3(_1884)) * 1.0) * _354, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _1939)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
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
    float _664 = dot(_119, _1409);
    float _667 = clamp(abs(_664) + 1.0013580322265625e-05, 0.0, 1.0);
    bool _690 = float(MobileReflectionCapture_Params.y > 0.0) != 0.0;
    vec3 _1106;
    if (_690)
    {
        _1106 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1615, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _1106 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1615, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    highp float _2609 = min((dot(_285, vec3(0.300048828125, 0.58984375, 0.1099853515625)) * _211) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z);
    vec3 _693 = (_1106 * mix(1.0, _2609, smoothstep(0.0, 1.0, clamp((_1615 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _211;
    bool _2611 = _1628 == 4u;
    vec3 _1109;
    if (_2611)
    {
        vec3 _1124;
        if (_2611)
        {
            float _734 = (((((_667 * 0.5) + 0.5) * _667) - 1.0) * clamp(1.25 - (1.25 * _1615), 0.0, 1.0)) + 1.0;
            vec3 _735 = _206 * 1.11123168468475341796875;
            float _738 = 1.0 - _667;
            highp float _2630 = _738 * _738;
            highp float _2632 = (_2630 * _2630) * _738;
            _1124 = (mix(vec3(0.07999999821186065673828125 * mix(_208, _734, _1123.x)), mix(_206 * mix(1.0, 1.0 - (_2632 + ((1.0 - _2632) * 0.040008544921875)), _1123.x), ((_735 * (((vec3(1.0) - mix(_735, _735 * _735, vec3(-0.7799999713897705078125))) * ((_667 - 1.0) * 0.85009765625)) + vec3(1.0))) * 0.89990234375) * _734, vec3(_207 * _1123.x)), _219) * View_SpecularOverrideParameter.w) + View_SpecularOverrideParameter.xyz;
        }
        else
        {
            _1124 = _220;
        }
        vec4 _762 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1123.y) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _763 = _762.x;
        float _766 = exp2((-9.28125) * _667);
        vec2 _773 = (vec2(-1.0400390625, 1.0400390625) * ((min(_763 * _763, _766) * _763) + _762.y)) + _762.zw;
        float _672 = ((vec3(0.040008544921875) * _773.x) + vec3(_773.y)).x * _1123.x;
        vec4 _775 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _776 = _775.x;
        vec2 _784 = (vec2(-1.0400390625, 1.0400390625) * ((min(_776 * _776, _766) * _776) + _775.y)) + _775.zw;
        vec3 _1107;
        if (_690)
        {
            _1107 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1123.y, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
        }
        else
        {
            _1107 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1444, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1123.y, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
        }
        _1109 = ((_693 * (1.0 - _672)) * ((_1124 * _784.x) + vec3((_784.y * clamp(50.0 * _1124.y, 0.0, 1.0)) * (1.0 - _1123.x)))) + ((_1107 * mix(1.0, _2609, smoothstep(0.0, 1.0, clamp((_1123.y * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * (_672 * _211));
    }
    else
    {
        vec3 _1108;
        if (_1628 == 7u)
        {
            _1108 = vec3(0.0);
        }
        else
        {
            vec4 _714 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _715 = _714.x;
            vec2 _725 = (vec2(-1.0400390625, 1.0400390625) * ((min(_715 * _715, exp2((-9.28125) * _667)) * _715) + _714.y)) + _714.zw;
            _1108 = _693 * ((_220 * _725.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _725.y));
        }
        _1109 = _1108;
    }
    uint _2660 = ((((min(uint(max(0.0, log2((_1372 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _2565.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _2565.x) * 2u;
    uvec4 _2668 = texelFetch(ps1, int(_2660 + 1u));
    uint _2669 = _2668.x;
    uint _2682 = (uint((_1708 & 1024u) != 0u) | (uint((_1708 & 2048u) != 0u) << 1u)) | (uint((_1708 & 4096u) != 0u) << 2u);
    uint _2683 = min(min(texelFetch(ps1, int(_2660)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _2685;
    _2685 = (((_285 * _72) * vec3(clamp((((exp(_1661 - (2.132999897003173828125 + _1656)) * 7.421432018280029296875) / _1661) * (1.0 - exp((-2.0) * _1661))) * 0.422769963741302490234375, 0.0, 1.0))) + ((MobileDirectionalLight_DirectionalLightColor.xyz * _331) * ((_2530 + (_2531 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) + _2532))) + _1109;
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
            float _804 = mix(1.0, dot(_1103, _2740), dot(_2740, vec4(1.0)));
            highp float _2777 = dot(_119, _2744);
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
                    highp float _3371 = max(0.0, dot(_119, normalize(_1409 + _2744)));
                    highp vec3 _3372 = vec3(1.0) * _2778;
                    float _1076 = _1615 * _1615;
                    highp float _3376 = _3371 * _1076;
                    highp float _3378 = _1076 / ((1.0 - (_3371 * _3371)) + (_3376 * _3376));
                    vec4 _1091 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1092 = _1091.x;
                    vec2 _1102 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1092 * _1092, exp2((-9.28125) * _667)) * _1092) + _1091.y)) + _1091.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3372) * 1.0;
                    _3385 = _3372 * (((_220 * _1102.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1102.y)) * (min(_3378 * _3378, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 2u:
                {
                    highp float _3346 = max(0.0, dot(_119, normalize(_1409 + _2744)));
                    highp vec3 _3347 = vec3(1.0) * _2778;
                    float _1045 = _1615 * _1615;
                    highp float _3351 = _3346 * _1045;
                    highp float _3353 = _1045 / ((1.0 - (_3346 * _3346)) + (_3351 * _3351));
                    vec4 _1060 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1061 = _1060.x;
                    vec2 _1071 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1061 * _1061, exp2((-9.28125) * _667)) * _1061) + _1060.y)) + _1060.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3347) * 1.0;
                    _3385 = _3347 * (((_220 * _1071.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1071.y)) * (min(_3353 * _3353, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = (vec3(1.0) * mix((_211 * mix(1.0, pow(clamp((dot(_119, _2744) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1123.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(_2744, -_1409), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1123.w))) * (_1123.xyz * _1123.xyz);
                    break;
                }
                case 3u:
                {
                    highp float _3325 = max(0.0, dot(_119, normalize(_1409 + _2744)));
                    highp vec3 _3326 = vec3(1.0) * _2778;
                    float _1005 = _1615 * _1615;
                    highp float _3330 = _3325 * _1005;
                    highp float _3332 = _1005 / ((1.0 - (_3325 * _3325)) + (_3330 * _3330));
                    vec4 _1020 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1021 = _1020.x;
                    vec2 _1031 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1021 * _1021, exp2((-9.28125) * _667)) * _1021) + _1020.y)) + _1020.zw;
                    _3384 = ((_72 * 0.318407952785491943359375) * _3326) * 1.0;
                    _3385 = _3326 * (((_220 * _1031.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1031.y)) * (min(_3332 * _3332, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_119, _2744) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1123.w), 0.0).xyz * (_1123.xyz * _1123.xyz);
                    break;
                }
                case 4u:
                {
                    highp float _3226 = max(_1123.y, 0.0199999995529651641845703125);
                    float _966 = dot(_119, _2744);
                    float _967 = dot(_1409, _2744);
                    float _970 = inversesqrt(2.0 + (2.0 * _967));
                    highp float _3228 = clamp((_966 + _664) * _970, 0.0, 1.0);
                    highp float _3231 = clamp(_970 + (_970 * _967), 0.0, 1.0);
                    float _958 = _3226 * _3226;
                    float _959 = 1.0 - _3231;
                    highp float _3232 = _959 * _959;
                    highp float _3234 = (_3232 * _3232) * _959;
                    highp float _3237 = _3234 + ((1.0 - _3234) * 0.039999999105930328369140625);
                    highp float _3239 = sqrt(_958 * _958);
                    highp float _3240 = 1.0 - _3239;
                    highp float _3250 = 1.0 - (_3228 * _3228);
                    highp float _3251 = _3228 * _958;
                    highp float _3253 = _958 / (_3250 + (_3251 * _3251));
                    highp float _3258 = 1.0 - _3237;
                    float _988 = ((0.6298828125 - (0.219970703125 * _3231)) * _3231) - 0.7451171875;
                    float _975 = _988 * _3228;
                    float _978 = clamp((0.66650390625 * _667) - _975, 0.00100040435791015625, 1.0);
                    highp vec3 _3274;
                    if (_207 > 0.0)
                    {
                        _3274 = mix(vec3(1.0), exp(-((log(_206 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _978) + (1.0 / clamp((0.66650390625 * _966) - _975, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_207));
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
                    float _991 = _1615 * _1615;
                    highp float _3292 = _3228 * _991;
                    highp float _3294 = _991 / (_3250 + (_3292 * _3292));
                    highp float _3295 = 1.0 - clamp((0.66650390625 * _3231) - _988, 0.0, 1.0);
                    highp float _3296 = _3295 * _3295;
                    highp float _3298 = (_3296 * _3296) * _3295;
                    highp float _3301 = clamp(50.0 * _220.y, 0.0, 1.0);
                    highp float _3307 = 1.0 - _3231;
                    highp float _3308 = _3307 * _3307;
                    highp float _3310 = (_3308 * _3308) * _3307;
                    _3384 = mix(_3277, _3278 * _3277, vec3(_1123.x));
                    _3385 = ((vec3(1.0) * _1123.x) * (_2778 * ((min(_3253 * _3253, 2048.0) * clamp(0.5 / ((_2778 * ((_667 * _3240) + _3239)) + (_667 * ((_2778 * _3240) + _3239))), 0.0, 1.0)) * _3237))) + ((vec3(1.0) * ((_2778 * min(_3294 * _3294, 2048.0)) * clamp(0.5 / ((_2778 * ((_978 * _3283) + _3282)) + (_978 * ((_2778 * _3283) + _3282))), 0.0, 1.0))) * mix(vec3(_3301 * _3310) + (_220 * (1.0 - _3310)), _3278 * (vec3(_3301 * _3298) + (_220 * (1.0 - _3298))), vec3(_1123.x)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 5u:
                {
                    highp float _3168 = max(0.0, dot(_119, normalize(_1409 + _2744)));
                    uint _3171 = uint((_1123.x * 255.0) + 0.5);
                    highp vec4 _3182 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _3171)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
                    highp float _3185 = clamp((_1123.w - 0.0999755859375) * 10.0, 0.0, 1.0);
                    float _917 = _3182.z;
                    highp float _3189 = max(clamp(_1615 * mix(1.0, _3182.x * 2.0, _3185), 0.0, 1.0), 0.0199999995529651641845703125);
                    float _921 = clamp(_1615 * mix(1.0, _3182.y * 2.0, _3185), 0.0, 1.0);
                    float _906 = mix(_3189, _921, _917);
                    float _907 = dot(_119, _2744);
                    highp vec3 _3208 = vec3(1.0) * _2778;
                    highp float _3213 = 1.0 - (_3168 * _3168);
                    float _925 = _3189 * _3189;
                    highp float _3214 = _3168 * _925;
                    highp float _3216 = _925 / (_3213 + (_3214 * _3214));
                    float _929 = _921 * _921;
                    highp float _3217 = _3168 * _929;
                    highp float _3219 = _929 / (_3213 + (_3217 * _3217));
                    vec4 _944 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _906) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _945 = _944.x;
                    vec2 _955 = (vec2(-1.0400390625, 1.0400390625) * ((min(_945 * _945, exp2((-9.28125) * _667)) * _945) + _944.y)) + _944.zw;
                    _3384 = (mix(_3208 * _804, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_907 - (max(2.0 * _907, 0.4000000059604644775390625) * (1.0 - sqrt(_804))), -1.0) * 0.5) + 0.5, _1104, float(_3171)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _3171)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_72 * 0.318407952785491943359375)) * 1.0;
                    _3385 = _3208 * (((_220 * _955.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _955.y)) * (mix(min(_3216 * _3216, 2048.0), min(_3219 * _3219, 2048.0), _917) * ((_906 * 0.25) + 0.25)));
                    _3386 = vec3(0.0);
                    break;
                }
                case 6u:
                {
                    highp float _3143 = max(0.0, dot(_119, normalize(_1409 + _2744)));
                    highp vec3 _3144 = vec3(1.0) * _2778;
                    float _874 = _1615 * _1615;
                    highp float _3148 = _3143 * _874;
                    highp float _3150 = _874 / ((1.0 - (_3143 * _3143)) + (_3148 * _3148));
                    vec4 _889 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _890 = _889.x;
                    vec2 _900 = (vec2(-1.0400390625, 1.0400390625) * ((min(_890 * _890, exp2((-9.28125) * _667)) * _890) + _889.y)) + _889.zw;
                    float _870 = clamp(-dot(_1409, _2744), 0.0, 1.0);
                    highp float _3161 = _870 * 0.3601171970367431640625;
                    highp float _3163 = 0.3601171970367431640625 / ((1.0 - (_870 * _870)) + (_3161 * _3161));
                    _3384 = ((_72 * 0.318407952785491943359375) * _3144) * 1.0;
                    _3385 = _3144 * (((_220 * _900.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _900.y)) * (min(_3150 * _3150, 2048.0) * ((_1615 * 0.25) + 0.25)));
                    _3386 = (vec3(1.0) * (clamp((0.5 - dot(_119, _2744)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_3163 * _3163, 2048.0))) * (_1123.xyz * _1123.xyz);
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
                    highp vec3 _2988 = _2744 - (_119 * _2961);
                    highp vec3 _2990 = _1409 - (_119 * _2962);
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
                    vec3 _863 = abs(_206);
                    highp float _3072 = _3059 * _3054;
                    highp float _3088 = _3018 - 0.14000000059604644775390625;
                    highp float _3097 = 1.0 - (_2986 * 0.5);
                    highp float _3098 = _3097 * _3097;
                    highp float _3101 = 0.95347940921783447265625 * ((_3098 * _3098) * _3097);
                    highp float _3103 = 0.95347940921783447265625 - _3101;
                    highp vec3 _3116 = ((vec3(((((exp(((-0.5) * (_3019 * _3019)) / (_3017 * _3017)) / (2.506242275238037109375 * _3017)) * (0.25 * _3001)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_3033 * _3033) * _3032)))) * (_208 * 2.0)) * mix(1.0, 1.0, clamp(-_2960, 0.0, 1.0))) + ((pow(_863, vec3((0.5 * sqrt(1.0 - (_3072 * _3072))) / _2986)) * (((exp(((-0.5) * (_3046 * _3046)) / (_3006 * _3006)) / (_3005 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _2997) - 3.980000019073486328125)) * (_3070 * _3070))) * 1.0)) + (pow(_863, vec3(0.800000011920928955078125 / _2986)) * (((exp(((-0.5) * (_3088 * _3088)) / (_3007 * _3007)) / (_3005 * 5.01248455047607421875)) * exp((17.0 * _2997) - 16.7800006866455078125)) * ((_3103 * _3103) * (0.0465205647051334381103515625 + _3101))))) * _804;
                    _3384 = vec3(0.0);
                    _3385 = vec3(0.0);
                    _3386 = -min(-(_3116 + ((sqrt(_863) * ((0.318359375 * mix(clamp((dot(normalize(_1409 - (_119 * dot(_1409, _119))), _2744) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_2777), 0.3300000131130218505859375)) * _207)) * pow(abs(_206 / vec3(dot(_206, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _804)))), vec3(0.0));
                    break;
                }
                case 8u:
                {
                    highp vec3 _2905 = _1123.xyz * _1123.xyz;
                    float _830 = clamp(_1123.w, 0.0, 1.0);
                    vec3 _833 = normalize(_1409 + _2744);
                    highp float _2907 = max(0.0, dot(_119, _833));
                    highp vec3 _2910 = vec3(1.0) * _2778;
                    float _834 = _1615 * _1615;
                    highp float _2913 = _2907 * _834;
                    highp float _2915 = _834 / ((1.0 - (_2907 * _2907)) + (_2913 * _2913));
                    vec4 _849 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1615) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _850 = _849.x;
                    vec2 _860 = (vec2(-1.0400390625, 1.0400390625) * ((min(_850 * _850, exp2((-9.28125) * _667)) * _850) + _849.y)) + _849.zw;
                    highp float _2920 = _1615 * _1615;
                    highp float _2921 = _2920 * _2920;
                    highp float _2925 = ((_2907 - (_2921 * _2907)) * _2907) + _2921;
                    highp float _2926 = 4.0 * _2921;
                    highp float _2939 = 1.0 - max(0.0, dot(_1409, _833));
                    highp float _2940 = _2939 * _2939;
                    highp float _2942 = (_2940 * _2940) * _2939;
                    _3384 = (_2910 * (_72 * 0.318407952785491943359375)) * mix(1.0, 1.0, _830);
                    _3385 = mix(_2910 * (((_220 * _860.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _860.y)) * (min(_2915 * _2915, 2048.0) * ((_1615 * 0.25) + 0.25))), (_2910 * (((0.318407952785491943359375 / (1.0 + _2926)) * (1.0 + ((_2926 * _2921) / (_2925 * _2925)))) * clamp(0.25 / ((_2778 + _667) - (_2778 * _667)), 0.0, 1.0))) * (vec3(clamp(50.0 * _2905.y, 0.0, 1.0) * _2942) + (_2905 * (1.0 - _2942))), vec3(_830));
                    _3386 = vec3(0.0);
                    break;
                }
                case 9u:
                {
                    vec2 _807 = (_1123.yz * 2.0) - vec2(1.0);
                    highp float _2793 = dot(vec2(1.0), abs(_807));
                    highp vec3 _2797 = vec3(_807, 1.0 - _2793);
                    highp float _2799 = max(_2793 - 1.0, 0.0);
                    highp vec2 _2800 = _2797.xy;
                    bvec2 _2801 = greaterThanEqual(_2800, vec2(0.0));
                    highp float _2802 = -_2799;
                    highp vec2 _2808 = _2800 + vec2(_2801.x ? _2802 : _2799, _2801.y ? _2802 : _2799);
                    highp vec3 _2810 = normalize(vec3(_2808.x, _2808.y, _2797.z));
                    highp float _2811 = 1.0 - _1123.w;
                    vec3 _818 = normalize(_1409 + _2744);
                    highp float _2817 = max(0.0, dot(_119, _818));
                    float _811 = 1.0 - max(0.0, dot(_1409, _818));
                    highp float _2820 = _811 * _811;
                    highp float _2822 = (_2820 * _2820) * _811;
                    highp float _2825 = _2822 + ((1.0 - _2822) * (_208 * 0.08001708984375));
                    highp float _2826 = _1615 * _1615;
                    highp float _2828 = sqrt(_2826 * _2826);
                    highp float _2829 = 1.0 - _2828;
                    float _819 = _1615 * _1615;
                    highp float _2840 = _2817 * _819;
                    highp float _2842 = _819 / ((1.0 - (_2817 * _2817)) + (_2840 * _2840));
                    highp float _2848 = dot(_2810, _2744);
                    highp float _2849 = clamp(_2848, 0.0, 1.0);
                    highp float _2850 = mix(12.0, 1.0, _2849);
                    highp float _2857 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_2850 + 1.0)) * pow(clamp(dot(normalize(mix(_2810, -_119, vec3(_2811 * _207))), _2744), 0.0, 1.0), _2850));
                    vec3 _823 = _72 * 0.318407952785491943359375;
                    uint _2866 = uint((_1123.x * 255.0) + 0.5);
                    highp float _2867 = 1.0 - sqrt(_804);
                    float _813 = dot(_119, _2744);
                    highp float _2873 = float(_2866);
                    _3384 = vec3(0.0);
                    _3385 = (((vec3(1.0) * _2778) * min(_2842 * _2842, 2048.0)) * clamp(0.5 / ((_2778 * ((_667 * _2829) + _2828)) + (_667 * ((_2778 * _2829) + _2828))), 0.0, 1.0)) * _2825;
                    _3386 = mix(((vec3(1.0) * (mix(_2778, _2849 * _2857, _2811) * (1.0 - _2825))) * _823) * _804, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_813 - (max(2.0 * _813, 0.4000000059604644775390625) * _2867), -1.0) * 0.5) + 0.5, _1104, _2873), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_2848 - (max(2.0 * _2848, 0.4000000059604644775390625) * _2867), -1.0) * _2857) * 0.5) + 0.5, _1104, _2873), 0.0).xyz, vec3(_2811)) * 1.0) * _823, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2866)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
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
            _3392 = ((_2701.xyz * _2772) * _804) * ((_3384 + (_3385 * 1.0)) + _3386);
        }
        else
        {
            _3392 = vec3(0.0);
        }
        _2686 = _2685 + _3392;
    }
    vec3 _75 = _2685 * 1.0;
    vec4 _1122 = vec4(_75.x, _75.y, _75.z, _1358.w);
    _1122.w = 0.0;
    highp vec3 _3395 = min((_1122.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_3395.x, _3395.y, _3395.z, _1122.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

