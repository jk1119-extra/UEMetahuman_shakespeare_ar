// ! M_Head_Baked/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndSHIndirectPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_SpecularOverrideParameter(552,4),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4),View_SubSurfaceColorAsTransmittanceAtDistanceInMeters(1135,1)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_7(28,4),Material_PreshaderBuffer_9(36,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_12(48,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_19(76,4),Material_PreshaderBuffer_21(84,4),Material_PreshaderBuffer_24(96,4),Material_PreshaderBuffer_25(100,4),Material_PreshaderBuffer_26(104,4),Material_PreshaderBuffer_27(108,4),Material_PreshaderBuffer_28(112,4),Material_PreshaderBuffer_29(116,4),Material_PreshaderBuffer_30(120,4),Material_PreshaderBuffer_31(124,4),Material_PreshaderBuffer_32(128,4),Material_PreshaderBuffer_33(132,4),Material_PreshaderBuffer_34(136,4),Material_PreshaderBuffer_36(144,4),Material_PreshaderBuffer_38(152,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:552-0:m:8:4,0:732-0:h:24:3,0:748-0:h:28:4,0:752-0:h:32:32,0:786-0:m:12:1,0:792-0:h:64:3,0:943-0:h:68:1,0:987-0:h:72:1,0:988-0:h:76:4,0:1135-0:h:80:1,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:8-6:h:0:4,6:12-6:h:4:4,6:20-6:h:8:4,6:28-6:h:12:4,6:36-6:h:16:4,6:40-6:h:20:4,6:48-6:h:24:4,6:56-6:h:28:4,6:60-6:h:32:4,6:68-6:h:36:4,6:76-6:h:40:4,6:84-6:h:44:4,6:96-6:h:48:4,6:100-6:h:52:4,6:104-6:h:56:4,6:108-6:h:60:4,6:112-6:h:64:4,6:116-6:h:68:4,6:120-6:h:72:4,6:124-6:h:76:4,6:128-6:h:80:4,6:132-6:h:84:4,6:136-6:h:88:4,6:144-6:h:92:4,6:152-6:h:96:4
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

#define View_SubSurfaceColorAsTransmittanceAtDistanceInMeters (pc0_h[20].x)
#define View_SSProfilesTextureSizeAndInvSize (pc0_h[19])
#define View_bSubsurfacePostprocessEnabled (pc0_h[18].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[17].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[16].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[3].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[8 + int(Offset)])
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
uniform highp vec4 pc0_h[21];


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

vec4 _1362;
vec3 _1363;
vec3 _1365;
vec4 _1366;
float _1367;

void main()
{
    highp float _1378 = 1.0 / gl_FragCoord.w;
    mat3 _88 = mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz);
    highp vec2 _1398 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _1407 = vec4(((_1398 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _1378;
    highp vec3 _1416;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _1416 = -View_ViewForward;
    }
    else
    {
        _1416 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _187 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    float _96 = clamp((1.0 - (abs(in_var_TEXCOORD0[0].y) * 1.015625)) * 10.0, 0.0, 1.0);
    highp vec3 _1431 = mix(Material_PreshaderBuffer_3.xyz, Material_PreshaderBuffer_2.xyz, vec3(_96));
    vec3 _98 = vec4(_187, sqrt(clamp(1.0 - dot(_187, _187), 0.0, 1.0)), 1.0).xyz * _1431;
    float _100 = _98.z + 1.0;
    vec2 _194 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1442 = vec4(_194, sqrt(clamp(1.0 - dot(_194, _194), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _106 = vec3(_98.xy, _100);
    vec3 _110 = vec3(_1442.xy * vec2(-1.0), _1442.z);
    vec3 _117 = vec3(_96);
    highp vec3 _1446 = mix(_98, (_106 * vec3(dot(_106, _110))) - (vec3(_100) * _110), _117) * Material_PreshaderBuffer_7.xyz;
    vec3 _119 = normalize(_88 * _1446) * 1.0;
    highp float _1448 = dot(_119, _1416);
    highp vec3 _1451 = (-_1416) + ((_119 * _1448) * 2.0);
    highp vec4 _1459 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _1465 = Material_PreshaderBuffer_9.z * (Material_PreshaderBuffer_9.y * _1459.x);
    highp float _1475 = Material_PreshaderBuffer_9.z * (_1459.y * Material_PreshaderBuffer_12.x);
    highp float _1485 = (Material_PreshaderBuffer_14.x * _1459.z) * Material_PreshaderBuffer_14.y;
    highp vec3 _1490 = mix(mix(mix(texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz, Material_PreshaderBuffer_10.xyz, vec3(_1465)), Material_PreshaderBuffer_12.yzw, vec3(_1475)), Material_PreshaderBuffer_15.xyz, vec3(_1485));
    highp vec4 _1494 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _124 = _1494.x;
    float _125 = _1494.y;
    highp float _1511 = Material_PreshaderBuffer_24.z * _1494.z;
    highp vec3 _1516 = mix(mix(_1490, mix(mix(_1490, Material_PreshaderBuffer_17.xyz, vec3(_124)), Material_PreshaderBuffer_19.xyz, vec3(_125)), vec3(Material_PreshaderBuffer_21.y)), Material_PreshaderBuffer_25.xyz, vec3(_1511));
    highp float _1523 = Material_PreshaderBuffer_21.y * max(_124, _125);
    highp vec4 _1531 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _131 = _1531.x;
    highp vec4 _1545 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _135 = _1545.y;
    highp float _1558 = Material_PreshaderBuffer_28.w * ((_1545.x * 2.0) * mix(mix(Material_PreshaderBuffer_28.x, Material_PreshaderBuffer_27.w, _135), mix(Material_PreshaderBuffer_28.z, Material_PreshaderBuffer_28.y, _135), _96));
    float _141 = max(abs(1.0 - max(0.0, _1448)), 0.00010001659393310546875);
    bool _1564 = _141 <= 0.0;
    float _142 = mix(_1558, Material_PreshaderBuffer_29.x * _1558, _1564 ? 0.0 : pow(_141, Material_PreshaderBuffer_29.y));
    highp float _1568 = Material_PreshaderBuffer_29.w * _142;
    float _144 = mix(mix(_142, _1568, _1465), _1568, _1475);
    float _145 = mix(_144, _144 * Material_PreshaderBuffer_30.y, _1485);
    float _146 = mix(_145, Material_PreshaderBuffer_30.w * _145, _1523);
    highp float _1583 = Material_PreshaderBuffer_31.w * (((min(max(dot(_1516, vec3(0.2130126953125, 0.71484375, 0.07220458984375)), 0.040008544921875), 0.5498046875) + 0.050018310546875) * 1.49042141437530517578125) + 0.239990234375);
    highp float _1592 = mix(mix(mix(_1583, _1583 * Material_PreshaderBuffer_32.x, _1465), Material_PreshaderBuffer_32.y, _1511), Material_PreshaderBuffer_32.z, _1523);
    highp vec4 _1596 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _156 = _1596.x;
    float _159 = _1596.y;
    float _163 = _1596.z;
    float _166 = _1596.w;
    float _179 = clamp(abs(_1446 * vec3(0.5)).z, 0.0, 1.0);
    highp vec4 _1615 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _181 = _1615.w;
    vec3 _206 = clamp(mix(_1516, vec3(Material_PreshaderBuffer_26.x), vec3(Material_PreshaderBuffer_25.w)), vec3(0.0), vec3(1.0));
    float _207 = clamp(mix(Material_PreshaderBuffer_26.y * clamp(_1523 - _125, 0.0, 1.0), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _208 = clamp(clamp(((_131 <= 0.0) ? 0.0 : pow(_131, mix(Material_PreshaderBuffer_26.w, Material_PreshaderBuffer_26.z, _96))) * Material_PreshaderBuffer_27.x, 0.0, 1.0), 0.0, 1.0);
    highp float _1622 = max(0.015625, clamp(clamp(mix(_146, Material_PreshaderBuffer_31.y * _146, _1511), 0.0, 1.0) * Material_PreshaderBuffer_31.z, 0.0, 1.0));
    float _210 = clamp(mix(mix(_1592, mix(_1592, Material_PreshaderBuffer_33.x, mix(clamp((clamp(_156 * 5.0, 0.0, 1.0) + clamp(_159 * 5.0, 0.0, 1.0)) + (clamp(_163 * 5.0, 0.0, 1.0) + clamp(_166 * 5.0, 0.0, 1.0)), 0.0, 1.0), clamp((_159 + _156) + (_166 + _163), 0.0, 1.0), Material_PreshaderBuffer_32.w)), Material_PreshaderBuffer_33.y), 0.0, Material_PreshaderBuffer_25.w), 0.0, 1.0);
    float _211 = clamp(mix(1.0, mix((_179 <= 0.0) ? 0.0 : pow(_179, Material_PreshaderBuffer_34.y), 1.0, _1564 ? 0.0 : pow(_141, 5.0)) * ((_181 <= 0.0) ? 0.0 : pow(_181, Material_PreshaderBuffer_34.z)), _96), 0.0, 1.0);
    bool _1626 = _210 > 0.100000001490116119384765625;
    float _1108;
    vec4 _1127;
    if (_1626)
    {
        highp vec3 _1630 = vec3((vec4(_1365.x, _1365.y, _1365.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_34.x).w) * View_bSubsurfacePostprocessEnabled).w, 0.0, 0.0);
        vec4 _1114 = vec4(_1630.x, _1630.y, _1630.z, vec4(0.0).w);
        _1114.w = _210;
        vec3 _213 = dFdx(_119);
        vec3 _214 = dFdy(_119);
        _1127 = _1114;
        _1108 = clamp(pow(max(dot(_213, _213), dot(_214, _214)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    }
    else
    {
        _1127 = vec4(0.0);
        _1108 = 0.0;
    }
    uint _1733;
    uint _1635 = _1626 ? 5u : 1u;
    vec3 _219 = vec3(_207);
    vec3 _220 = mix(vec3(0.07999999821186065673828125 * _208), _206, _219);
    vec3 _73 = _206 - (_206 * _207);
    highp vec3 _1642 = ((vec3(-0.5) + texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xyz) * vec3(2.0)) * Material_PreshaderBuffer_36.xyz;
    float _226 = _1642.z + 1.0;
    vec2 _272 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _228 = vec4(_272, sqrt(clamp(1.0 - dot(_272, _272), 0.0, 1.0)), 1.0).xyz * _1431;
    float _230 = _228.z + 1.0;
    vec2 _279 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _1653 = vec4(_279, sqrt(clamp(1.0 - dot(_279, _279), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_5.xyz;
    vec3 _236 = vec3(_228.xy, _230);
    vec3 _240 = vec3(_1653.xy * vec2(-1.0), _1653.z);
    highp vec3 _1654 = mix(_228, (_236 * vec3(dot(_236, _240))) - (vec3(_230) * _240), _117) * Material_PreshaderBuffer_7.xyz;
    highp vec3 _1658 = ((_1654 * _1654) * vec3(ivec3(sign(_1654)))) * Material_PreshaderBuffer_38.xyz;
    vec3 _257 = vec3(_1642.xy, _226);
    vec3 _261 = vec3(_1658.xy * vec2(-1.0), _1658.z);
    highp float _1663 = (0.75 + (1.25 * sqrt(1.0 - _211))) / _211;
    highp vec3 _1667 = (_119 * 2.132999897003173828125) + (normalize(_88 * normalize(mix(vec3(0.0, 0.0, 1.0), (_257 * vec3(dot(_257, _261))) - (vec3(_226) * _261), _117))) * _1663);
    highp float _1668 = length(_1667);
    highp vec3 _1670 = _1667 / vec3(_1668);
    float _292 = _1670.y;
    vec4 _1115 = _1366;
    _1115.y = (-0.48860299587249755859375) * _292;
    float _293 = _1670.z;
    vec4 _1116 = _1115;
    _1116.z = 0.48860299587249755859375 * _293;
    float _294 = _1670.x;
    vec4 _1117 = _1116;
    _1117.w = (-0.48860299587249755859375) * _294;
    vec3 _295 = _1670 * _1670;
    vec4 _1118 = _1362;
    _1118.x = (1.09254801273345947265625 * _294) * _292;
    vec4 _1119 = _1118;
    _1119.y = ((-1.09254801273345947265625) * _292) * _293;
    vec4 _1120 = _1119;
    _1120.z = 0.3153919875621795654296875 * ((3.0 * _295.z) - 1.0);
    vec4 _1121 = _1120;
    _1121.w = ((-1.09254801273345947265625) * _294) * _293;
    vec4 _1122 = _1117;
    _1122.x = 0.885601043701171875;
    vec3 _288 = _1122.yzw * 2.09375;
    vec4 _289 = vec4(_1122.x, _288.x, _288.y, _288.z);
    vec4 _290 = _1121 * 0.78515625;
    float _291 = (_295.x - _295.y) * 0.4289104640483856201171875;
    vec3 _1123 = vec3(0.0);
    _1123.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _289) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _290)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _291);
    vec3 _1124 = _1123;
    _1124.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _289) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _290)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _291);
    vec3 _1125 = _1124;
    _1125.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _289) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _290)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _291);
    vec3 _285 = max(vec3(0.0), _1125);
    highp vec4 _1715 = vec4(_1670, 1.0);
    highp vec3 _1719 = _1363;
    _1719.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _1715);
    highp vec3 _1723 = _1719;
    _1723.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _1715);
    highp vec3 _1727 = _1723;
    _1727.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _1715);
    vec3 _316 = max(vec3(0.0), _1727) * View_SkyLightColor.xyz;
    vec4 _1107;
    do
    {
        _1733 = Primitive_Flags;
        if (((_1733 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _1107 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _1107 = vec4(1.0);
        break;
    } while(false);
    highp float _1741 = _1407.w;
    highp vec4 _1765;
    int _1748 = 0;
    for (;;)
    {
        if (_1748 < 4)
        {
            if (_1741 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_1748)])
            {
                _1765 = MobileDirectionalLight_DirectionalLightScreenToShadow(_1748) * vec4(_1407.xy, _1741, 1.0);
                break;
            }
            _1748++;
            continue;
        }
        else
        {
            _1765 = vec4(0.0);
            break;
        }
    }
    float _1109;
    if (_1765.z > 0.0)
    {
        highp vec2 _1775 = (_1765.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _1776 = fract(_1775);
        highp vec2 _1780 = (floor(_1775) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _1786 = vec4((min(1.0 - _1765.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _1788 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1780, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1786, vec4(0.0), vec4(1.0));
        highp vec4 _1793 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1780, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1786, vec4(0.0), vec4(1.0));
        highp vec4 _1798 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1780, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1786, vec4(0.0), vec4(1.0));
        highp vec4 _1803 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _1780, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _1786, vec4(0.0), vec4(1.0));
        highp float _1805 = _1776.x;
        highp float _1806 = 1.0 - _1805;
        highp vec4 _1833 = _1362;
        _1833.x = (((_1788.w * _1806) + _1788.z) + _1793.w) + (_1793.z * _1805);
        highp vec4 _1837 = _1833;
        _1837.y = (((_1788.x * _1806) + _1788.y) + _1793.x) + (_1793.y * _1805);
        highp vec4 _1841 = _1837;
        _1841.z = (((_1798.w * _1806) + _1798.z) + _1803.w) + (_1803.z * _1805);
        highp vec4 _1845 = _1841;
        _1845.w = (((_1798.x * _1806) + _1798.y) + _1803.x) + (_1803.y * _1805);
        highp float _1846 = _1776.y;
        highp float _1855 = clamp((_1741 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _1109 = mix(dot(_1845, vec4(1.0 - _1846, 1.0, 1.0, _1846) * 0.111111111938953399658203125), 1.0, _1855 * _1855);
    }
    else
    {
        _1109 = 1.0;
    }
    highp vec4 _1874 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _335 = _1109 * mix(1.0, dot(_1107, _1874), dot(_1874, vec4(1.0)));
    highp float _1875 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _1876 = max(0.0, _1875);
    highp vec3 _2555;
    highp vec3 _2556;
    highp vec3 _2557;
    switch (_1635)
    {
        case 1u:
        {
        }
        case 10u:
        {
        }
        case 11u:
        {
            highp float _2542 = max(0.0, dot(_119, normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2543 = vec3(1.0) * _1876;
            float _641 = _1622 * _1622;
            highp float _2547 = _2542 * _641;
            highp float _2549 = _641 / ((1.0 - (_2542 * _2542)) + (_2547 * _2547));
            vec4 _656 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _657 = _656.x;
            vec2 _667 = (vec2(-1.0400390625, 1.0400390625) * ((min(_657 * _657, exp2((-9.28125) * clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0))) * _657) + _656.y)) + _656.zw;
            _2555 = ((_73 * 0.318407952785491943359375) * _2543) * 1.0;
            _2556 = _2543 * (((_220 * _667.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _667.y)) * (min(_2549 * _2549, 2048.0) * ((_1622 * 0.25) + 0.25)));
            _2557 = vec3(0.0);
            break;
        }
        case 2u:
        {
            highp float _2444 = max(0.0, dot(_119, normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2445 = vec3(1.0) * _1876;
            float _606 = _1622 * _1622;
            highp float _2449 = _2444 * _606;
            highp float _2451 = _606 / ((1.0 - (_2444 * _2444)) + (_2449 * _2449));
            vec4 _621 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _622 = _621.x;
            vec2 _632 = (vec2(-1.0400390625, 1.0400390625) * ((min(_622 * _622, exp2((-9.28125) * clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0))) * _622) + _621.y)) + _621.zw;
            highp vec3 _2457 = _1127.xyz * _1127.xyz;
            highp vec3 _2476 = exp((-((-log(clamp(_2457, vec3(9.9999999600419720025001879548654e-13), vec3(1.0)))) / vec3(max(9.9999999600419720025001879548654e-13, View_SubSurfaceColorAsTransmittanceAtDistanceInMeters)))) * 1.0);
            highp float _2477 = _2476.y;
            highp float _2478 = _2476.z;
            highp vec4 _2483 = mix(vec4(_2477, _2478, 0.0, -0.3333333432674407958984375), vec4(_2478, _2477, -1.0, 0.666666686534881591796875), bvec4(_2477 < _2478));
            highp float _2484 = _2476.x;
            highp float _2485 = _2483.x;
            highp vec4 _2493 = mix(vec4(_2484, _2483.yz, _2485), vec4(_2485, _2483.yw, _2484), bvec4(_2484 < _2485));
            highp float _2494 = _2493.x;
            highp float _2495 = _2493.w;
            highp float _2496 = _2493.y;
            highp float _2498 = _2494 - min(_2495, _2496);
            highp float _2508 = _2457.y;
            highp float _2509 = _2457.z;
            highp vec4 _2514 = mix(vec4(_2508, _2509, 0.0, -0.3333333432674407958984375), vec4(_2509, _2508, -1.0, 0.666666686534881591796875), bvec4(_2508 < _2509));
            highp float _2515 = _2457.x;
            highp float _2516 = _2514.x;
            highp float _2523 = abs(((_2495 - _2496) / ((6.0 * _2498) + 1.0000000133514319600180897396058e-10)) + _2493.z) * 6.0;
            _2555 = ((_73 * 0.318407952785491943359375) * _2445) * 1.0;
            _2556 = _2445 * (((_220 * _632.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _632.y)) * (min(_2451 * _2451, 2048.0) * ((_1622 * 0.25) + 0.25)));
            _2557 = (vec3(1.0) * mix((_211 * mix(1.0, pow(clamp((dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1127.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz, -_1416), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1127.w))) * mix((((clamp(vec3(abs(_2523 - 3.0) - 1.0, 2.0 - abs(_2523 - 2.0), 2.0 - abs(_2523 - 4.0)), vec3(0.0), vec3(1.0)) - vec3(1.0)) * (_2498 / (_2494 + 1.0000000133514319600180897396058e-10))) + vec3(1.0)) * mix(vec4(_2515, _1367, _1367, _2516), vec4(_2516, _1367, _1367, _2515), bvec4(_2515 < _2516)).x, _2457, vec3(_1109));
            break;
        }
        case 3u:
        {
            highp float _2423 = max(0.0, dot(_119, normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2424 = vec3(1.0) * _1876;
            float _560 = _1622 * _1622;
            highp float _2428 = _2423 * _560;
            highp float _2430 = _560 / ((1.0 - (_2423 * _2423)) + (_2428 * _2428));
            vec4 _575 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _576 = _575.x;
            vec2 _586 = (vec2(-1.0400390625, 1.0400390625) * ((min(_576 * _576, exp2((-9.28125) * clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0))) * _576) + _575.y)) + _575.zw;
            _2555 = ((_73 * 0.318407952785491943359375) * _2424) * 1.0;
            _2556 = _2424 * (((_220 * _586.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _586.y)) * (min(_2430 * _2430, 2048.0) * ((_1622 * 0.25) + 0.25)));
            _2557 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1127.w), 0.0).xyz * (_1127.xyz * _1127.xyz);
            break;
        }
        case 4u:
        {
            highp float _2324 = max(_1127.y, 0.0199999995529651641845703125);
            float _516 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _517 = dot(_119, _1416);
            float _518 = dot(_1416, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            float _521 = inversesqrt(2.0 + (2.0 * _518));
            highp float _2326 = clamp((_516 + _517) * _521, 0.0, 1.0);
            highp float _2329 = clamp(_521 + (_521 * _518), 0.0, 1.0);
            float _505 = _2324 * _2324;
            float _508 = clamp(abs(_517) + 1.0013580322265625e-05, 0.0, 1.0);
            float _509 = 1.0 - _2329;
            highp float _2330 = _509 * _509;
            highp float _2332 = (_2330 * _2330) * _509;
            highp float _2335 = _2332 + ((1.0 - _2332) * 0.039999999105930328369140625);
            highp float _2337 = sqrt(_505 * _505);
            highp float _2338 = 1.0 - _2337;
            highp float _2348 = 1.0 - (_2326 * _2326);
            highp float _2349 = _2326 * _505;
            highp float _2351 = _505 / (_2348 + (_2349 * _2349));
            highp float _2356 = 1.0 - _2335;
            float _539 = ((0.6298828125 - (0.219970703125 * _2329)) * _2329) - 0.7451171875;
            float _526 = _539 * _2326;
            float _529 = clamp((0.66650390625 * _508) - _526, 0.00100040435791015625, 1.0);
            highp vec3 _2372;
            if (_207 > 0.0)
            {
                _2372 = mix(vec3(1.0), exp(-((log(_206 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _529) + (1.0 / clamp((0.66650390625 * _516) - _526, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_207));
            }
            else
            {
                _2372 = vec3(1.0);
            }
            highp vec3 _2375 = ((vec3(1.0) * _1876) * (_73 * 0.318407952785491943359375)) * 1.0;
            highp vec3 _2376 = _2372 * (_2356 * _2356);
            highp float _2378 = _1622 * _1622;
            highp float _2380 = sqrt(_2378 * _2378);
            highp float _2381 = 1.0 - _2380;
            float _542 = _1622 * _1622;
            highp float _2390 = _2326 * _542;
            highp float _2392 = _542 / (_2348 + (_2390 * _2390));
            highp float _2393 = 1.0 - clamp((0.66650390625 * _2329) - _539, 0.0, 1.0);
            highp float _2394 = _2393 * _2393;
            highp float _2396 = (_2394 * _2394) * _2393;
            highp float _2399 = clamp(50.0 * _220.y, 0.0, 1.0);
            highp float _2405 = 1.0 - _2329;
            highp float _2406 = _2405 * _2405;
            highp float _2408 = (_2406 * _2406) * _2405;
            _2555 = mix(_2375, _2376 * _2375, vec3(_1127.x));
            _2556 = ((vec3(1.0) * _1127.x) * (_1876 * ((min(_2351 * _2351, 2048.0) * clamp(0.5 / ((_1876 * ((_508 * _2338) + _2337)) + (_508 * ((_1876 * _2338) + _2337))), 0.0, 1.0)) * _2335))) + ((vec3(1.0) * ((_1876 * min(_2392 * _2392, 2048.0)) * clamp(0.5 / ((_1876 * ((_529 * _2381) + _2380)) + (_529 * ((_1876 * _2381) + _2380))), 0.0, 1.0))) * mix(vec3(_2399 * _2408) + (_220 * (1.0 - _2408)), _2376 * (vec3(_2399 * _2396) + (_220 * (1.0 - _2396))), vec3(_1127.x)));
            _2557 = vec3(0.0);
            break;
        }
        case 5u:
        {
            highp float _2266 = max(0.0, dot(_119, normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            uint _2269 = uint((_1127.x * 255.0) + 0.5);
            highp vec4 _2280 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _2269)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
            highp float _2283 = clamp((_1127.w - 0.0999755859375) * 10.0, 0.0, 1.0);
            float _464 = _2280.z;
            highp float _2287 = max(clamp(_1622 * mix(1.0, _2280.x * 2.0, _2283), 0.0, 1.0), 0.0199999995529651641845703125);
            float _468 = clamp(_1622 * mix(1.0, _2280.y * 2.0, _2283), 0.0, 1.0);
            float _452 = mix(_2287, _468, _464);
            float _453 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp vec3 _2306 = vec3(1.0) * _1876;
            highp float _2311 = 1.0 - (_2266 * _2266);
            float _472 = _2287 * _2287;
            highp float _2312 = _2266 * _472;
            highp float _2314 = _472 / (_2311 + (_2312 * _2312));
            float _476 = _468 * _468;
            highp float _2315 = _2266 * _476;
            highp float _2317 = _476 / (_2311 + (_2315 * _2315));
            vec4 _491 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _452) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _492 = _491.x;
            vec2 _502 = (vec2(-1.0400390625, 1.0400390625) * ((min(_492 * _492, exp2((-9.28125) * clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0))) * _492) + _491.y)) + _491.zw;
            _2555 = (mix(_2306 * _335, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_453 - (max(2.0 * _453, 0.4000000059604644775390625) * (1.0 - sqrt(_335))), -1.0) * 0.5) + 0.5, _1108, float(_2269)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2269)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_73 * 0.318407952785491943359375)) * 1.0;
            _2556 = _2306 * (((_220 * _502.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _502.y)) * (mix(min(_2314 * _2314, 2048.0), min(_2317 * _2317, 2048.0), _464) * ((_452 * 0.25) + 0.25)));
            _2557 = vec3(0.0);
            break;
        }
        case 6u:
        {
            highp float _2241 = max(0.0, dot(_119, normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
            highp vec3 _2242 = vec3(1.0) * _1876;
            float _417 = _1622 * _1622;
            highp float _2246 = _2241 * _417;
            highp float _2248 = _417 / ((1.0 - (_2241 * _2241)) + (_2246 * _2246));
            vec4 _432 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _433 = _432.x;
            vec2 _443 = (vec2(-1.0400390625, 1.0400390625) * ((min(_433 * _433, exp2((-9.28125) * clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0))) * _433) + _432.y)) + _432.zw;
            float _409 = clamp(-dot(_1416, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0);
            highp float _2259 = _409 * 0.3601171970367431640625;
            highp float _2261 = 0.3601171970367431640625 / ((1.0 - (_409 * _409)) + (_2259 * _2259));
            _2555 = ((_73 * 0.318407952785491943359375) * _2242) * 1.0;
            _2556 = _2242 * (((_220 * _443.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _443.y)) * (min(_2248 * _2248, 2048.0) * ((_1622 * 0.25) + 0.25)));
            _2557 = (vec3(1.0) * (clamp((0.5 - dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_2261 * _2261, 2048.0))) * (_1127.xyz * _1127.xyz);
            break;
        }
        case 7u:
        {
            highp float _2057 = clamp(_1622, 0.0039215688593685626983642578125, 1.0);
            highp float _2058 = dot(_1416, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _2059 = clamp(_1875, -1.0, 1.0);
            highp float _2060 = clamp(_1448, -1.0, 1.0);
            highp float _2061 = abs(_2060);
            highp float _2066 = (((-0.15658299624919891357421875) * _2061) + 1.5703125) * sqrt(1.0 - _2061);
            highp float _2071 = abs(_2059);
            highp float _2076 = (((-0.15658299624919891357421875) * _2071) + 1.5703125) * sqrt(1.0 - _2071);
            highp float _2084 = cos(0.5 * abs((1.5703125 - ((_2060 >= 0.0) ? _2066 : (3.140625 - _2066))) - (1.5703125 - ((_2059 >= 0.0) ? _2076 : (3.140625 - _2076)))));
            highp vec3 _2086 = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz - (_119 * _2059);
            highp vec3 _2088 = _1416 - (_119 * _2060);
            highp float _2095 = dot(_2086, _2088) * inversesqrt((dot(_2086, _2086) * dot(_2088, _2088)) + 9.9999997473787516355514526367188e-05);
            highp float _2099 = sqrt(clamp(0.5 + (0.5 * _2095), 0.0, 1.0));
            highp float _2103 = _2057 * _2057;
            highp float _2104 = _2103 * 0.5;
            highp float _2105 = _2103 * 2.0;
            highp float _2115 = _2103 * (1.41421353816986083984375 * _2099);
            highp float _2116 = _2059 + _2060;
            highp float _2117 = _2116 - ((-0.1398856937885284423828125) * (((0.997551023960113525390625 * _2099) * sqrt(1.0 - (_2060 * _2060))) + ((-0.06994284689426422119140625) * _2060)));
            highp float _2130 = 1.0 - sqrt(clamp(0.5 + (0.5 * _2058), 0.0, 1.0));
            highp float _2131 = _2130 * _2130;
            highp float _2144 = _2116 - 0.0350000001490116119384765625;
            highp float _2152 = 1.0 / ((1.190000057220458984375 / _2084) + (0.36000001430511474609375 * _2084));
            highp float _2157 = _2099 * (1.0 + (_2152 * (0.60000002384185791015625 - (0.800000011920928955078125 * _2095))));
            highp float _2163 = 1.0 - (_2084 * sqrt(clamp(1.0 - (_2157 * _2157), 0.0, 1.0)));
            highp float _2164 = _2163 * _2163;
            highp float _2168 = 0.95347940921783447265625 - (0.95347940921783447265625 * ((_2164 * _2164) * _2163));
            vec3 _402 = abs(_206);
            highp float _2170 = _2157 * _2152;
            highp float _2186 = _2116 - 0.14000000059604644775390625;
            highp float _2195 = 1.0 - (_2084 * 0.5);
            highp float _2196 = _2195 * _2195;
            highp float _2199 = 0.95347940921783447265625 * ((_2196 * _2196) * _2195);
            highp float _2201 = 0.95347940921783447265625 - _2199;
            highp vec3 _2214 = ((vec3(((((exp(((-0.5) * (_2117 * _2117)) / (_2115 * _2115)) / (2.506242275238037109375 * _2115)) * (0.25 * _2099)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_2131 * _2131) * _2130)))) * (_208 * 2.0)) * mix(1.0, 1.0, clamp(-_2058, 0.0, 1.0))) + ((pow(_402, vec3((0.5 * sqrt(1.0 - (_2170 * _2170))) / _2084)) * (((exp(((-0.5) * (_2144 * _2144)) / (_2104 * _2104)) / (_2103 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _2095) - 3.980000019073486328125)) * (_2168 * _2168))) * 1.0)) + (pow(_402, vec3(0.800000011920928955078125 / _2084)) * (((exp(((-0.5) * (_2186 * _2186)) / (_2105 * _2105)) / (_2103 * 5.01248455047607421875)) * exp((17.0 * _2095) - 16.7800006866455078125)) * ((_2201 * _2201) * (0.0465205647051334381103515625 + _2199))))) * _335;
            _2555 = vec3(0.0);
            _2556 = vec3(0.0);
            _2557 = -min(-(_2214 + ((sqrt(_402) * ((0.318359375 * mix(clamp((dot(normalize(_1416 - (_119 * dot(_1416, _119))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_1875), 0.3300000131130218505859375)) * _207)) * pow(abs(_206 / vec3(dot(_206, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _335)))), vec3(0.0));
            break;
        }
        case 8u:
        {
            highp vec3 _2003 = _1127.xyz * _1127.xyz;
            float _365 = clamp(_1127.w, 0.0, 1.0);
            vec3 _372 = normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _2005 = max(0.0, dot(_119, _372));
            float _368 = clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0);
            highp vec3 _2008 = vec3(1.0) * _1876;
            float _373 = _1622 * _1622;
            highp float _2011 = _2005 * _373;
            highp float _2013 = _373 / ((1.0 - (_2005 * _2005)) + (_2011 * _2011));
            vec4 _388 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _389 = _388.x;
            vec2 _399 = (vec2(-1.0400390625, 1.0400390625) * ((min(_389 * _389, exp2((-9.28125) * _368)) * _389) + _388.y)) + _388.zw;
            highp float _2018 = _1622 * _1622;
            highp float _2019 = _2018 * _2018;
            highp float _2023 = ((_2005 - (_2019 * _2005)) * _2005) + _2019;
            highp float _2024 = 4.0 * _2019;
            highp float _2037 = 1.0 - max(0.0, dot(_1416, _372));
            highp float _2038 = _2037 * _2037;
            highp float _2040 = (_2038 * _2038) * _2037;
            _2555 = (_2008 * (_73 * 0.318407952785491943359375)) * mix(1.0, 1.0, _365);
            _2556 = mix(_2008 * (((_220 * _399.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _399.y)) * (min(_2013 * _2013, 2048.0) * ((_1622 * 0.25) + 0.25))), (_2008 * (((0.318407952785491943359375 / (1.0 + _2024)) * (1.0 + ((_2024 * _2019) / (_2023 * _2023)))) * clamp(0.25 / ((_1876 + _368) - (_1876 * _368)), 0.0, 1.0))) * (vec3(clamp(50.0 * _2003.y, 0.0, 1.0) * _2040) + (_2003 * (1.0 - _2040))), vec3(_365));
            _2557 = vec3(0.0);
            break;
        }
        case 9u:
        {
            vec2 _338 = (_1127.yz * 2.0) - vec2(1.0);
            highp float _1891 = dot(vec2(1.0), abs(_338));
            highp vec3 _1895 = vec3(_338, 1.0 - _1891);
            highp float _1897 = max(_1891 - 1.0, 0.0);
            highp vec2 _1898 = _1895.xy;
            bvec2 _1899 = greaterThanEqual(_1898, vec2(0.0));
            highp float _1900 = -_1897;
            highp vec2 _1906 = _1898 + vec2(_1899.x ? _1900 : _1897, _1899.y ? _1900 : _1897);
            highp vec3 _1908 = normalize(vec3(_1906.x, _1906.y, _1895.z));
            highp float _1909 = 1.0 - _1127.w;
            vec3 _353 = normalize(_1416 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1915 = max(0.0, dot(_119, _353));
            float _343 = clamp(abs(dot(_119, _1416)) + 1.0013580322265625e-05, 0.0, 1.0);
            float _345 = 1.0 - max(0.0, dot(_1416, _353));
            highp float _1918 = _345 * _345;
            highp float _1920 = (_1918 * _1918) * _345;
            highp float _1923 = _1920 + ((1.0 - _1920) * (_208 * 0.08001708984375));
            highp float _1924 = _1622 * _1622;
            highp float _1926 = sqrt(_1924 * _1924);
            highp float _1927 = 1.0 - _1926;
            float _354 = _1622 * _1622;
            highp float _1938 = _1915 * _354;
            highp float _1940 = _354 / ((1.0 - (_1915 * _1915)) + (_1938 * _1938));
            highp float _1946 = dot(_1908, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1947 = clamp(_1946, 0.0, 1.0);
            highp float _1948 = mix(12.0, 1.0, _1947);
            highp float _1955 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_1948 + 1.0)) * pow(clamp(dot(normalize(mix(_1908, -_119, vec3(_1909 * _207))), MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz), 0.0, 1.0), _1948));
            vec3 _358 = _73 * 0.318407952785491943359375;
            uint _1964 = uint((_1127.x * 255.0) + 0.5);
            highp float _1965 = 1.0 - sqrt(_335);
            float _347 = dot(_119, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
            highp float _1971 = float(_1964);
            _2555 = vec3(0.0);
            _2556 = (((vec3(1.0) * _1876) * min(_1940 * _1940, 2048.0)) * clamp(0.5 / ((_1876 * ((_343 * _1927) + _1926)) + (_343 * ((_1876 * _1927) + _1926))), 0.0, 1.0)) * _1923;
            _2557 = mix(((vec3(1.0) * (mix(_1876, _1947 * _1955, _1909) * (1.0 - _1923))) * _358) * _335, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_347 - (max(2.0 * _347, 0.4000000059604644775390625) * _1965), -1.0) * 0.5) + 0.5, _1108, _1971), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_1946 - (max(2.0 * _1946, 0.4000000059604644775390625) * _1965), -1.0) * _1955) * 0.5) + 0.5, _1108, _1971), 0.0).xyz, vec3(_1909)) * 1.0) * _358, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _1964)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
            break;
        }
        default:
        {
            _2555 = vec3(0.0);
            _2556 = vec3(0.0);
            _2557 = vec3(0.0);
            break;
        }
    }
    uvec2 _2590 = uvec2(uint(_1398.x), uint(_1398.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    float _668 = dot(_119, _1416);
    float _671 = clamp(abs(_668) + 1.0013580322265625e-05, 0.0, 1.0);
    bool _694 = float(MobileReflectionCapture_Params.y > 0.0) != 0.0;
    vec3 _1110;
    if (_694)
    {
        _1110 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1451, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1622, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _1110 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1451, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1622, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    highp float _2633 = min(((dot(_285, vec3(0.300048828125, 0.58984375, 0.1099853515625)) + dot(_316, vec3(0.300048828125, 0.58984375, 0.1099853515625))) * _211) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z);
    vec3 _697 = (_1110 * mix(1.0, _2633, smoothstep(0.0, 1.0, clamp((_1622 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _211;
    bool _2635 = _1635 == 4u;
    vec3 _1113;
    if (_2635)
    {
        vec3 _1128;
        if (_2635)
        {
            float _738 = (((((_671 * 0.5) + 0.5) * _671) - 1.0) * clamp(1.25 - (1.25 * _1622), 0.0, 1.0)) + 1.0;
            vec3 _739 = _206 * 1.11123168468475341796875;
            float _742 = 1.0 - _671;
            highp float _2654 = _742 * _742;
            highp float _2656 = (_2654 * _2654) * _742;
            _1128 = (mix(vec3(0.07999999821186065673828125 * mix(_208, _738, _1127.x)), mix(_206 * mix(1.0, 1.0 - (_2656 + ((1.0 - _2656) * 0.040008544921875)), _1127.x), ((_739 * (((vec3(1.0) - mix(_739, _739 * _739, vec3(-0.7799999713897705078125))) * ((_671 - 1.0) * 0.85009765625)) + vec3(1.0))) * 0.89990234375) * _738, vec3(_207 * _1127.x)), _219) * View_SpecularOverrideParameter.w) + View_SpecularOverrideParameter.xyz;
        }
        else
        {
            _1128 = _220;
        }
        vec4 _766 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1127.y) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _767 = _766.x;
        float _770 = exp2((-9.28125) * _671);
        vec2 _777 = (vec2(-1.0400390625, 1.0400390625) * ((min(_767 * _767, _770) * _767) + _766.y)) + _766.zw;
        float _676 = ((vec3(0.040008544921875) * _777.x) + vec3(_777.y)).x * _1127.x;
        vec4 _779 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
        float _780 = _779.x;
        vec2 _788 = (vec2(-1.0400390625, 1.0400390625) * ((min(_780 * _780, _770) * _780) + _779.y)) + _779.zw;
        vec3 _1111;
        if (_694)
        {
            _1111 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1451, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_1127.y, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
        }
        else
        {
            _1111 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _1451, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_1127.y, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
        }
        _1113 = ((_697 * (1.0 - _676)) * ((_1128 * _788.x) + vec3((_788.y * clamp(50.0 * _1128.y, 0.0, 1.0)) * (1.0 - _1127.x)))) + ((_1111 * mix(1.0, _2633, smoothstep(0.0, 1.0, clamp((_1127.y * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * (_676 * _211));
    }
    else
    {
        vec3 _1112;
        if (_1635 == 7u)
        {
            _1112 = vec3(0.0);
        }
        else
        {
            vec4 _718 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _719 = _718.x;
            vec2 _729 = (vec2(-1.0400390625, 1.0400390625) * ((min(_719 * _719, exp2((-9.28125) * _671)) * _719) + _718.y)) + _718.zw;
            _1112 = _697 * ((_220 * _729.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _729.y));
        }
        _1113 = _1112;
    }
    uint _2683 = ((((min(uint(max(0.0, log2((_1378 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _2590.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _2590.x) * 2u;
    uvec4 _2691 = texelFetch(ps1, int(_2683 + 1u));
    uint _2692 = _2691.x;
    uint _2705 = (uint((_1733 & 1024u) != 0u) | (uint((_1733 & 2048u) != 0u) << 1u)) | (uint((_1733 & 4096u) != 0u) << 2u);
    uint _2706 = min(min(texelFetch(ps1, int(_2683)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _2708;
    _2708 = ((((_285 + _316) * _73) * vec3(clamp((((exp(_1668 - (2.132999897003173828125 + _1663)) * 7.421432018280029296875) / _1668) * (1.0 - exp((-2.0) * _1668))) * 0.422769963741302490234375, 0.0, 1.0))) + ((MobileDirectionalLight_DirectionalLightColor.xyz * _335) * ((_2555 + (_2556 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) + _2557))) + _1113;
    highp vec3 _2709;
    SPIRV_CROSS_LOOP
    for (uint _2711 = 0u; _2711 < _2706; _2708 = _2709, _2711++)
    {
        uint _2720 = texelFetch(ps2, int(_2692 + _2711)).x * 6u;
        highp vec4 _2722 = texelFetch(ps0, int(_2720));
        highp vec4 _2724 = texelFetch(ps0, int(_2720 + 1u));
        highp vec4 _2726 = texelFetch(ps0, int(_2720 + 2u));
        highp vec4 _2728 = texelFetch(ps0, int(_2720 + 3u));
        highp float _2729 = _2722.w;
        highp float _2730 = _2729 * _2729;
        highp vec3 _2731 = _2722.xyz;
        highp vec3 _2732 = in_var_TEXCOORD8.xyz - _2731;
        if ((dot(_2732, _2732) * _2730) > 1.0)
        {
            _2709 = _2708;
            continue;
        }
        uint _2739 = floatBitsToUint(_2726.w);
        if (((_2739 >> 8u) & _2705) == 0u)
        {
            _2709 = _2708;
            continue;
        }
        highp float _2748 = _2724.w;
        highp vec4 _2763 = vec4(float((_2739 & 1u) != 0u), float((_2739 & 2u) != 0u), float((_2739 & 4u) != 0u), float((_2739 & 8u) != 0u));
        highp vec3 _2764 = _2731 - in_var_TEXCOORD8.xyz;
        highp float _2765 = dot(_2764, _2764);
        highp vec3 _2767 = _2764 * inversesqrt(_2765);
        highp float _2784;
        if (_2748 == 0.0)
        {
            highp float _2776 = _2765 * _2730;
            highp float _2779 = clamp(1.0 - (_2776 * _2776), 0.0, 1.0);
            _2784 = (_2779 * _2779) * (1.0 / (_2765 + 1.0));
        }
        else
        {
            highp vec3 _2771 = _2764 * _2729;
            _2784 = pow(1.0 - clamp(dot(_2771, _2771), 0.0, 1.0), _2748);
        }
        highp float _2795;
        if (((_2739 >> 16u) & 3u) == 2u)
        {
            highp float _2792 = clamp((dot(_2767, _2726.xyz) - _2728.x) * _2728.y, 0.0, 1.0);
            _2795 = _2784 * (_2792 * _2792);
        }
        else
        {
            _2795 = _2784;
        }
        highp vec3 _3415;
        SPIRV_CROSS_BRANCH
        if (_2795 > 0.0)
        {
            float _808 = mix(1.0, dot(_1107, _2763), dot(_2763, vec4(1.0)));
            highp float _2800 = dot(_119, _2767);
            highp float _2801 = max(0.0, _2800);
            highp vec3 _3407;
            highp vec3 _3408;
            highp vec3 _3409;
            switch (_1635)
            {
                case 1u:
                {
                }
                case 10u:
                {
                }
                case 11u:
                {
                    highp float _3394 = max(0.0, dot(_119, normalize(_1416 + _2767)));
                    highp vec3 _3395 = vec3(1.0) * _2801;
                    float _1080 = _1622 * _1622;
                    highp float _3399 = _3394 * _1080;
                    highp float _3401 = _1080 / ((1.0 - (_3394 * _3394)) + (_3399 * _3399));
                    vec4 _1095 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1096 = _1095.x;
                    vec2 _1106 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1096 * _1096, exp2((-9.28125) * _671)) * _1096) + _1095.y)) + _1095.zw;
                    _3407 = ((_73 * 0.318407952785491943359375) * _3395) * 1.0;
                    _3408 = _3395 * (((_220 * _1106.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1106.y)) * (min(_3401 * _3401, 2048.0) * ((_1622 * 0.25) + 0.25)));
                    _3409 = vec3(0.0);
                    break;
                }
                case 2u:
                {
                    highp float _3369 = max(0.0, dot(_119, normalize(_1416 + _2767)));
                    highp vec3 _3370 = vec3(1.0) * _2801;
                    float _1049 = _1622 * _1622;
                    highp float _3374 = _3369 * _1049;
                    highp float _3376 = _1049 / ((1.0 - (_3369 * _3369)) + (_3374 * _3374));
                    vec4 _1064 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1065 = _1064.x;
                    vec2 _1075 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1065 * _1065, exp2((-9.28125) * _671)) * _1065) + _1064.y)) + _1064.zw;
                    _3407 = ((_73 * 0.318407952785491943359375) * _3370) * 1.0;
                    _3408 = _3370 * (((_220 * _1075.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1075.y)) * (min(_3376 * _3376, 2048.0) * ((_1622 * 0.25) + 0.25)));
                    _3409 = (vec3(1.0) * mix((_211 * mix(1.0, pow(clamp((dot(_119, _2767) * 0.666666686534881591796875) + 0.3333333432674407958984375, 0.0, 1.0), 1.5) * 1.66666662693023681640625, _1127.w)) * 0.1592039763927459716796875, 1.0, pow(clamp(dot(_2767, -_1416), 0.0, 1.0), 12.0) * mix(3.0, 0.100000001490116119384765625, _1127.w))) * (_1127.xyz * _1127.xyz);
                    break;
                }
                case 3u:
                {
                    highp float _3348 = max(0.0, dot(_119, normalize(_1416 + _2767)));
                    highp vec3 _3349 = vec3(1.0) * _2801;
                    float _1009 = _1622 * _1622;
                    highp float _3353 = _3348 * _1009;
                    highp float _3355 = _1009 / ((1.0 - (_3348 * _3348)) + (_3353 * _3353));
                    vec4 _1024 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _1025 = _1024.x;
                    vec2 _1035 = (vec2(-1.0400390625, 1.0400390625) * ((min(_1025 * _1025, exp2((-9.28125) * _671)) * _1025) + _1024.y)) + _1024.zw;
                    _3407 = ((_73 * 0.318407952785491943359375) * _3349) * 1.0;
                    _3408 = _3349 * (((_220 * _1035.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _1035.y)) * (min(_3355 * _3355, 2048.0) * ((_1622 * 0.25) + 0.25)));
                    _3409 = textureLod(SPIRV_Cross_CombinedView_PreIntegratedBRDFView_PreIntegratedBRDFSampler, vec2(clamp((dot(_119, _2767) * 0.5) + 0.5, 0.0, 1.0), 1.0 - _1127.w), 0.0).xyz * (_1127.xyz * _1127.xyz);
                    break;
                }
                case 4u:
                {
                    highp float _3249 = max(_1127.y, 0.0199999995529651641845703125);
                    float _970 = dot(_119, _2767);
                    float _971 = dot(_1416, _2767);
                    float _974 = inversesqrt(2.0 + (2.0 * _971));
                    highp float _3251 = clamp((_970 + _668) * _974, 0.0, 1.0);
                    highp float _3254 = clamp(_974 + (_974 * _971), 0.0, 1.0);
                    float _962 = _3249 * _3249;
                    float _963 = 1.0 - _3254;
                    highp float _3255 = _963 * _963;
                    highp float _3257 = (_3255 * _3255) * _963;
                    highp float _3260 = _3257 + ((1.0 - _3257) * 0.039999999105930328369140625);
                    highp float _3262 = sqrt(_962 * _962);
                    highp float _3263 = 1.0 - _3262;
                    highp float _3273 = 1.0 - (_3251 * _3251);
                    highp float _3274 = _3251 * _962;
                    highp float _3276 = _962 / (_3273 + (_3274 * _3274));
                    highp float _3281 = 1.0 - _3260;
                    float _992 = ((0.6298828125 - (0.219970703125 * _3254)) * _3254) - 0.7451171875;
                    float _979 = _992 * _3251;
                    float _982 = clamp((0.66650390625 * _671) - _979, 0.00100040435791015625, 1.0);
                    highp vec3 _3297;
                    if (_207 > 0.0)
                    {
                        _3297 = mix(vec3(1.0), exp(-((log(_206 * 0.318407952785491943359375) * vec3(-0.5)) * max(((1.0 / _982) + (1.0 / clamp((0.66650390625 * _970) - _979, 0.00100040435791015625, 1.0))) - 2.0, 0.0))), vec3(_207));
                    }
                    else
                    {
                        _3297 = vec3(1.0);
                    }
                    highp vec3 _3300 = ((vec3(1.0) * _2801) * (_73 * 0.318407952785491943359375)) * 1.0;
                    highp vec3 _3301 = _3297 * (_3281 * _3281);
                    highp float _3303 = _1622 * _1622;
                    highp float _3305 = sqrt(_3303 * _3303);
                    highp float _3306 = 1.0 - _3305;
                    float _995 = _1622 * _1622;
                    highp float _3315 = _3251 * _995;
                    highp float _3317 = _995 / (_3273 + (_3315 * _3315));
                    highp float _3318 = 1.0 - clamp((0.66650390625 * _3254) - _992, 0.0, 1.0);
                    highp float _3319 = _3318 * _3318;
                    highp float _3321 = (_3319 * _3319) * _3318;
                    highp float _3324 = clamp(50.0 * _220.y, 0.0, 1.0);
                    highp float _3330 = 1.0 - _3254;
                    highp float _3331 = _3330 * _3330;
                    highp float _3333 = (_3331 * _3331) * _3330;
                    _3407 = mix(_3300, _3301 * _3300, vec3(_1127.x));
                    _3408 = ((vec3(1.0) * _1127.x) * (_2801 * ((min(_3276 * _3276, 2048.0) * clamp(0.5 / ((_2801 * ((_671 * _3263) + _3262)) + (_671 * ((_2801 * _3263) + _3262))), 0.0, 1.0)) * _3260))) + ((vec3(1.0) * ((_2801 * min(_3317 * _3317, 2048.0)) * clamp(0.5 / ((_2801 * ((_982 * _3306) + _3305)) + (_982 * ((_2801 * _3306) + _3305))), 0.0, 1.0))) * mix(vec3(_3324 * _3333) + (_220 * (1.0 - _3333)), _3301 * (vec3(_3324 * _3321) + (_220 * (1.0 - _3321))), vec3(_1127.x)));
                    _3409 = vec3(0.0);
                    break;
                }
                case 5u:
                {
                    highp float _3191 = max(0.0, dot(_119, normalize(_1416 + _2767)));
                    uint _3194 = uint((_1127.x * 255.0) + 0.5);
                    highp vec4 _3205 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _3194)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
                    highp float _3208 = clamp((_1127.w - 0.0999755859375) * 10.0, 0.0, 1.0);
                    float _921 = _3205.z;
                    highp float _3212 = max(clamp(_1622 * mix(1.0, _3205.x * 2.0, _3208), 0.0, 1.0), 0.0199999995529651641845703125);
                    float _925 = clamp(_1622 * mix(1.0, _3205.y * 2.0, _3208), 0.0, 1.0);
                    float _910 = mix(_3212, _925, _921);
                    float _911 = dot(_119, _2767);
                    highp vec3 _3231 = vec3(1.0) * _2801;
                    highp float _3236 = 1.0 - (_3191 * _3191);
                    float _929 = _3212 * _3212;
                    highp float _3237 = _3191 * _929;
                    highp float _3239 = _929 / (_3236 + (_3237 * _3237));
                    float _933 = _925 * _925;
                    highp float _3240 = _3191 * _933;
                    highp float _3242 = _933 / (_3236 + (_3240 * _3240));
                    vec4 _948 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _910) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _949 = _948.x;
                    vec2 _959 = (vec2(-1.0400390625, 1.0400390625) * ((min(_949 * _949, exp2((-9.28125) * _671)) * _949) + _948.y)) + _948.zw;
                    _3407 = (mix(_3231 * _808, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_911 - (max(2.0 * _911, 0.4000000059604644775390625) * (1.0 - sqrt(_808))), -1.0) * 0.5) + 0.5, _1108, float(_3194)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _3194)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_73 * 0.318407952785491943359375)) * 1.0;
                    _3408 = _3231 * (((_220 * _959.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _959.y)) * (mix(min(_3239 * _3239, 2048.0), min(_3242 * _3242, 2048.0), _921) * ((_910 * 0.25) + 0.25)));
                    _3409 = vec3(0.0);
                    break;
                }
                case 6u:
                {
                    highp float _3166 = max(0.0, dot(_119, normalize(_1416 + _2767)));
                    highp vec3 _3167 = vec3(1.0) * _2801;
                    float _878 = _1622 * _1622;
                    highp float _3171 = _3166 * _878;
                    highp float _3173 = _878 / ((1.0 - (_3166 * _3166)) + (_3171 * _3171));
                    vec4 _893 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _894 = _893.x;
                    vec2 _904 = (vec2(-1.0400390625, 1.0400390625) * ((min(_894 * _894, exp2((-9.28125) * _671)) * _894) + _893.y)) + _893.zw;
                    float _874 = clamp(-dot(_1416, _2767), 0.0, 1.0);
                    highp float _3184 = _874 * 0.3601171970367431640625;
                    highp float _3186 = 0.3601171970367431640625 / ((1.0 - (_874 * _874)) + (_3184 * _3184));
                    _3407 = ((_73 * 0.318407952785491943359375) * _3167) * 1.0;
                    _3408 = _3167 * (((_220 * _904.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _904.y)) * (min(_3173 * _3173, 2048.0) * ((_1622 * 0.25) + 0.25)));
                    _3409 = (vec3(1.0) * (clamp((0.5 - dot(_119, _2767)) * 0.4444444477558135986328125, 0.0, 1.0) * min(_3186 * _3186, 2048.0))) * (_1127.xyz * _1127.xyz);
                    break;
                }
                case 7u:
                {
                    highp float _2982 = clamp(_1622, 0.0039215688593685626983642578125, 1.0);
                    highp float _2983 = dot(_1416, _2767);
                    highp float _2984 = clamp(_2800, -1.0, 1.0);
                    highp float _2985 = clamp(_1448, -1.0, 1.0);
                    highp float _2986 = abs(_2985);
                    highp float _2991 = (((-0.15658299624919891357421875) * _2986) + 1.5703125) * sqrt(1.0 - _2986);
                    highp float _2996 = abs(_2984);
                    highp float _3001 = (((-0.15658299624919891357421875) * _2996) + 1.5703125) * sqrt(1.0 - _2996);
                    highp float _3009 = cos(0.5 * abs((1.5703125 - ((_2985 >= 0.0) ? _2991 : (3.140625 - _2991))) - (1.5703125 - ((_2984 >= 0.0) ? _3001 : (3.140625 - _3001)))));
                    highp vec3 _3011 = _2767 - (_119 * _2984);
                    highp vec3 _3013 = _1416 - (_119 * _2985);
                    highp float _3020 = dot(_3011, _3013) * inversesqrt((dot(_3011, _3011) * dot(_3013, _3013)) + 9.9999997473787516355514526367188e-05);
                    highp float _3024 = sqrt(clamp(0.5 + (0.5 * _3020), 0.0, 1.0));
                    highp float _3028 = _2982 * _2982;
                    highp float _3029 = _3028 * 0.5;
                    highp float _3030 = _3028 * 2.0;
                    highp float _3040 = _3028 * (1.41421353816986083984375 * _3024);
                    highp float _3041 = _2984 + _2985;
                    highp float _3042 = _3041 - ((-0.1398856937885284423828125) * (((0.997551023960113525390625 * _3024) * sqrt(1.0 - (_2985 * _2985))) + ((-0.06994284689426422119140625) * _2985)));
                    highp float _3055 = 1.0 - sqrt(clamp(0.5 + (0.5 * _2983), 0.0, 1.0));
                    highp float _3056 = _3055 * _3055;
                    highp float _3069 = _3041 - 0.0350000001490116119384765625;
                    highp float _3077 = 1.0 / ((1.190000057220458984375 / _3009) + (0.36000001430511474609375 * _3009));
                    highp float _3082 = _3024 * (1.0 + (_3077 * (0.60000002384185791015625 - (0.800000011920928955078125 * _3020))));
                    highp float _3088 = 1.0 - (_3009 * sqrt(clamp(1.0 - (_3082 * _3082), 0.0, 1.0)));
                    highp float _3089 = _3088 * _3088;
                    highp float _3093 = 0.95347940921783447265625 - (0.95347940921783447265625 * ((_3089 * _3089) * _3088));
                    vec3 _867 = abs(_206);
                    highp float _3095 = _3082 * _3077;
                    highp float _3111 = _3041 - 0.14000000059604644775390625;
                    highp float _3120 = 1.0 - (_3009 * 0.5);
                    highp float _3121 = _3120 * _3120;
                    highp float _3124 = 0.95347940921783447265625 * ((_3121 * _3121) * _3120);
                    highp float _3126 = 0.95347940921783447265625 - _3124;
                    highp vec3 _3139 = ((vec3(((((exp(((-0.5) * (_3042 * _3042)) / (_3040 * _3040)) / (2.506242275238037109375 * _3040)) * (0.25 * _3024)) * (0.0465205647051334381103515625 + (0.95347940921783447265625 * ((_3056 * _3056) * _3055)))) * (_208 * 2.0)) * mix(1.0, 1.0, clamp(-_2983, 0.0, 1.0))) + ((pow(_867, vec3((0.5 * sqrt(1.0 - (_3095 * _3095))) / _3009)) * (((exp(((-0.5) * (_3069 * _3069)) / (_3029 * _3029)) / (_3028 * 1.2531211376190185546875)) * exp(((-3.650000095367431640625) * _3020) - 3.980000019073486328125)) * (_3093 * _3093))) * 1.0)) + (pow(_867, vec3(0.800000011920928955078125 / _3009)) * (((exp(((-0.5) * (_3111 * _3111)) / (_3030 * _3030)) / (_3028 * 5.01248455047607421875)) * exp((17.0 * _3020) - 16.7800006866455078125)) * ((_3126 * _3126) * (0.0465205647051334381103515625 + _3124))))) * _808;
                    _3407 = vec3(0.0);
                    _3408 = vec3(0.0);
                    _3409 = -min(-(_3139 + ((sqrt(_867) * ((0.318359375 * mix(clamp((dot(normalize(_1416 - (_119 * dot(_1416, _119))), _2767) + 1.0) * 0.25, 0.0, 1.0), 1.0 - abs(_2800), 0.3300000131130218505859375)) * _207)) * pow(abs(_206 / vec3(dot(_206, vec3(0.300048828125, 0.58984375, 0.1099853515625)))), vec3(1.0 - _808)))), vec3(0.0));
                    break;
                }
                case 8u:
                {
                    highp vec3 _2928 = _1127.xyz * _1127.xyz;
                    float _834 = clamp(_1127.w, 0.0, 1.0);
                    vec3 _837 = normalize(_1416 + _2767);
                    highp float _2930 = max(0.0, dot(_119, _837));
                    highp vec3 _2933 = vec3(1.0) * _2801;
                    float _838 = _1622 * _1622;
                    highp float _2936 = _2930 * _838;
                    highp float _2938 = _838 / ((1.0 - (_2930 * _2930)) + (_2936 * _2936));
                    vec4 _853 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _1622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
                    float _854 = _853.x;
                    vec2 _864 = (vec2(-1.0400390625, 1.0400390625) * ((min(_854 * _854, exp2((-9.28125) * _671)) * _854) + _853.y)) + _853.zw;
                    highp float _2943 = _1622 * _1622;
                    highp float _2944 = _2943 * _2943;
                    highp float _2948 = ((_2930 - (_2944 * _2930)) * _2930) + _2944;
                    highp float _2949 = 4.0 * _2944;
                    highp float _2962 = 1.0 - max(0.0, dot(_1416, _837));
                    highp float _2963 = _2962 * _2962;
                    highp float _2965 = (_2963 * _2963) * _2962;
                    _3407 = (_2933 * (_73 * 0.318407952785491943359375)) * mix(1.0, 1.0, _834);
                    _3408 = mix(_2933 * (((_220 * _864.x) + vec3(clamp(50.0 * _220.y, 0.0, 1.0) * _864.y)) * (min(_2938 * _2938, 2048.0) * ((_1622 * 0.25) + 0.25))), (_2933 * (((0.318407952785491943359375 / (1.0 + _2949)) * (1.0 + ((_2949 * _2944) / (_2948 * _2948)))) * clamp(0.25 / ((_2801 + _671) - (_2801 * _671)), 0.0, 1.0))) * (vec3(clamp(50.0 * _2928.y, 0.0, 1.0) * _2965) + (_2928 * (1.0 - _2965))), vec3(_834));
                    _3409 = vec3(0.0);
                    break;
                }
                case 9u:
                {
                    vec2 _811 = (_1127.yz * 2.0) - vec2(1.0);
                    highp float _2816 = dot(vec2(1.0), abs(_811));
                    highp vec3 _2820 = vec3(_811, 1.0 - _2816);
                    highp float _2822 = max(_2816 - 1.0, 0.0);
                    highp vec2 _2823 = _2820.xy;
                    bvec2 _2824 = greaterThanEqual(_2823, vec2(0.0));
                    highp float _2825 = -_2822;
                    highp vec2 _2831 = _2823 + vec2(_2824.x ? _2825 : _2822, _2824.y ? _2825 : _2822);
                    highp vec3 _2833 = normalize(vec3(_2831.x, _2831.y, _2820.z));
                    highp float _2834 = 1.0 - _1127.w;
                    vec3 _822 = normalize(_1416 + _2767);
                    highp float _2840 = max(0.0, dot(_119, _822));
                    float _815 = 1.0 - max(0.0, dot(_1416, _822));
                    highp float _2843 = _815 * _815;
                    highp float _2845 = (_2843 * _2843) * _815;
                    highp float _2848 = _2845 + ((1.0 - _2845) * (_208 * 0.08001708984375));
                    highp float _2849 = _1622 * _1622;
                    highp float _2851 = sqrt(_2849 * _2849);
                    highp float _2852 = 1.0 - _2851;
                    float _823 = _1622 * _1622;
                    highp float _2863 = _2840 * _823;
                    highp float _2865 = _823 / ((1.0 - (_2840 * _2840)) + (_2863 * _2863));
                    highp float _2871 = dot(_2833, _2767);
                    highp float _2872 = clamp(_2871, 0.0, 1.0);
                    highp float _2873 = mix(12.0, 1.0, _2872);
                    highp float _2880 = 0.800000011920928955078125 + ((0.20000000298023223876953125 * (_2873 + 1.0)) * pow(clamp(dot(normalize(mix(_2833, -_119, vec3(_2834 * _207))), _2767), 0.0, 1.0), _2873));
                    vec3 _827 = _73 * 0.318407952785491943359375;
                    uint _2889 = uint((_1127.x * 255.0) + 0.5);
                    highp float _2890 = 1.0 - sqrt(_808);
                    float _817 = dot(_119, _2767);
                    highp float _2896 = float(_2889);
                    _3407 = vec3(0.0);
                    _3408 = (((vec3(1.0) * _2801) * min(_2865 * _2865, 2048.0)) * clamp(0.5 / ((_2801 * ((_671 * _2852) + _2851)) + (_671 * ((_2801 * _2852) + _2851))), 0.0, 1.0)) * _2848;
                    _3409 = mix(((vec3(1.0) * (mix(_2801, _2872 * _2880, _2834) * (1.0 - _2848))) * _827) * _808, (mix(textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_817 - (max(2.0 * _817, 0.4000000059604644775390625) * _2890), -1.0) * 0.5) + 0.5, _1108, _2896), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3(((max(_2871 - (max(2.0 * _2871, 0.4000000059604644775390625) * _2890), -1.0) * _2880) * 0.5) + 0.5, _1108, _2896), 0.0).xyz, vec3(_2834)) * 1.0) * _827, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _2889)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz);
                    break;
                }
                default:
                {
                    _3407 = vec3(0.0);
                    _3408 = vec3(0.0);
                    _3409 = vec3(0.0);
                    break;
                }
            }
            _3415 = ((_2724.xyz * _2795) * _808) * ((_3407 + (_3408 * 1.0)) + _3409);
        }
        else
        {
            _3415 = vec3(0.0);
        }
        _2709 = _2708 + _3415;
    }
    vec3 _76 = _2708 * 1.0;
    vec4 _1126 = vec4(_76.x, _76.y, _76.z, _1362.w);
    _1126.w = 0.0;
    highp vec3 _3418 = min((_1126.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_3418.x, _3418.y, _3418.z, _1126.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

