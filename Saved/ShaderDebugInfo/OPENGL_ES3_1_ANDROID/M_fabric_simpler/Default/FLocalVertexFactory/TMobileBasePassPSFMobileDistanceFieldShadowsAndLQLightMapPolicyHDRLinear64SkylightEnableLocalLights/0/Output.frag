// ! M_fabric_simpler/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsAndLQLightMapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_CullingSign(571,1),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_18(72,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:571-0:h:20:1,0:748-0:h:24:4,0:752-0:h:28:32,0:786-0:m:8:1,0:792-0:h:60:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:16-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:40-6:h:24:4,6:44-6:h:28:4,6:52-6:h:32:4,6:56-6:h:36:4,6:60-6:h:40:4,6:64-6:h:44:4,6:68-6:h:48:4,6:72-6:h:52:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),MobileReflectionCapture_Texture(3:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(4:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(5:1[LightmapResourceCluster_StaticShadowTextureSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
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

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[15].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[7 + int(Offset)])
#define View_SkyLightColor (pc0_h[6])
#define View_CullingSign (pc0_h[5].x)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps3
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps4
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps5
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
uniform highp vec4 pc0_h[16];


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
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes (pc4_h[1])
#define PrecomputedLightingBuffer_StaticShadowMapMasks (pc4_h[0])
uniform mediump vec4 pc4_m[4];
uniform highp vec4 pc4_h[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


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
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _532;
vec4 _533;

void main()
{
    highp vec3 _566;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _566 = -View_ViewForward;
    }
    else
    {
        _566 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _257 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _585 = mix(vec3(0.0, 0.0, 1.0), vec4(_257, sqrt(clamp(1.0 - dot(_257, _257), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_0.x));
    float _96 = _585.z + 1.0;
    highp vec4 _593 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _97 = _593.x;
    vec3 _98 = vec3(_97);
    vec3 _99 = mix(vec3(0.0, 0.0, 1.0), mix(vec3(0.0, 0.0, 1.0), _585, vec3(Material_PreshaderBuffer_0.y)), _98);
    vec3 _104 = vec3(_585.xy, _96);
    vec3 _108 = vec3(_99.xy * vec2(-1.0), _99.z);
    vec3 _114 = (_104 * vec3(dot(_104, _108))) - (vec3(_96) * _108);
    float _116 = _114.z + 1.0;
    vec2 _121 = vec2(in_var_TEXCOORD0[0].x * Material_PreshaderBuffer_0.z, in_var_TEXCOORD0[0].y * Material_PreshaderBuffer_0.w) * vec2(Material_PreshaderBuffer_1.x);
    vec2 _264 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, _121).xy * vec2(2.0)) - vec2(1.0);
    vec3 _123 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_264, sqrt(clamp(1.0 - dot(_264, _264), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.y)), vec3(0.0, 0.0, 1.0), _98);
    float _125 = _123.z + 1.0;
    vec2 _271 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.z)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _129 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_271, sqrt(clamp(1.0 - dot(_271, _271), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.w)), vec3(0.0, 0.0, 1.0), _98);
    vec3 _134 = vec3(_123.xy, _125);
    vec3 _138 = vec3(_129.xy * vec2(-1.0), _129.z);
    vec3 _144 = (_134 * vec3(dot(_134, _138))) - (vec3(_125) * _138);
    vec3 _149 = vec3(_114.xy, _116);
    vec3 _153 = vec3(_144.xy * vec2(-1.0), _144.z);
    vec3 _160 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_149 * vec3(dot(_149, _153))) - (vec3(_116) * _153))) * ((View_CullingSign * (((Primitive_Flags & 64u) != 0u) ? (-1.0) : 1.0)) * float(gl_FrontFacing ? (-1) : 1));
    highp float _627 = dot(_160, _566);
    highp vec3 _630 = (-_566) + ((_160 * _627) * 2.0);
    highp vec4 _646 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, (in_var_TEXCOORD0[0].zw * vec2(Material_PreshaderBuffer_4.x)) + Material_PreshaderBuffer_5.xy);
    float _168 = _646.x;
    float _170 = _646.y;
    float _173 = _646.z;
    highp vec3 _670 = vec3(_97);
    highp vec3 _671 = mix(mix(Material_PreshaderBuffer_11.xyz, ((Material_PreshaderBuffer_6.xyz * vec3(_168)) + (Material_PreshaderBuffer_8.xyz * vec3(_170))) + (Material_PreshaderBuffer_10.xyz * vec3(_173)), vec3(((_168 + _170) + _173) * Material_PreshaderBuffer_10.w)), Material_PreshaderBuffer_13.xyz, _670);
    vec3 _178 = ((texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _121).xyz + vec3(0.00010001659393310546875)) / (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _121, 14.0).xyz + vec3(0.00010001659393310546875))) * _671;
    highp vec3 _675 = mix(_178, _671, vec3(Material_PreshaderBuffer_13.w));
    highp vec3 _679 = mix(_675, _178 * _675, vec3(Material_PreshaderBuffer_14.x));
    highp vec4 _683 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, _121);
    float _180 = _683.x;
    highp float _686 = mix(0.5, _180, Material_PreshaderBuffer_14.y);
    highp float _695 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_14.z)).x, Material_PreshaderBuffer_14.w);
    float _192 = (_686 >= 0.5) ? (1.0 - (((1.0 - _686) * 2.0) * (1.0 - _695))) : ((_686 * 2.0) * _695);
    vec3 _193 = vec3(_192);
    highp float _702 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).x, Material_PreshaderBuffer_15.x);
    vec3 _200 = vec3(1.0) - (((vec3(1.0) - _193) * vec3(2.0)) * vec3(1.0 - _702));
    vec3 _203 = (_193 * vec3(2.0)) * vec3(_702);
    bool _204 = _192 >= 0.5;
    float _207 = _204 ? _200.x : _203.x;
    float _214 = _207 * 2.0;
    highp float _708 = mix(mix(Material_PreshaderBuffer_15.y, 1.0, clamp(_214, 0.0, 1.0)), Material_PreshaderBuffer_15.z, clamp(_214 - 1.0, 0.0, 1.0));
    float _280 = _679.x;
    highp float _710 = (_280 <= 0.0) ? 0.0 : pow(_280, _708);
    float _281 = _679.y;
    highp float _712 = (_281 <= 0.0) ? 0.0 : pow(_281, _708);
    float _278 = _679.z;
    highp float _714 = (_278 <= 0.0) ? 0.0 : pow(_278, _708);
    vec3 _279 = vec3(_710, _712, _714);
    highp vec3 _718 = mix(vec3(0.5), vec3(_207, _204 ? _200.y : _203.y, _204 ? _200.z : _203.z), vec3(Material_PreshaderBuffer_15.w));
    vec3 _223 = vec3(1.0) - (((vec3(1.0) - _279) * vec3(2.0)) * (vec3(1.0) - _718));
    vec3 _225 = (_279 * vec3(2.0)) * _718;
    highp vec3 _719 = mix(vec3((_710 >= 0.5) ? _223.x : _225.x, (_712 >= 0.5) ? _223.y : _225.y, (_714 >= 0.5) ? _223.z : _225.z), Material_PreshaderBuffer_13.xyz, _670);
    vec3 _243 = mix(max(_719, mix(vec3(0.0), texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_16.x)).xxx * _671, vec3(Material_PreshaderBuffer_16.y))), _719, _98);
    float _288 = _243.x;
    float _289 = _243.y;
    float _286 = _243.z;
    float _247 = max(abs(1.0 - max(0.0, _627)), 0.00010001659393310546875);
    highp vec4 _755 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _294 = clamp(mix(_243, vec3((_288 <= 0.0) ? 0.0 : pow(_288, Material_PreshaderBuffer_16.z), (_289 <= 0.0) ? 0.0 : pow(_289, Material_PreshaderBuffer_16.z), (_286 <= 0.0) ? 0.0 : pow(_286, Material_PreshaderBuffer_16.z)), vec3(mix(Material_PreshaderBuffer_17.x, Material_PreshaderBuffer_16.w, _97) * ((((_247 <= 0.0) ? 0.0 : pow(_247, Material_PreshaderBuffer_17.y)) * 0.9599609375) + 0.040008544921875))), vec3(0.0), vec3(1.0));
    float _295 = clamp(Material_PreshaderBuffer_17.z, 0.0, 1.0);
    highp float _761 = max(0.015625, clamp(Material_PreshaderBuffer_18.y * _755.y, 0.0, 1.0));
    float _298 = clamp(_755.x, 0.0, 1.0);
    vec3 _301 = mix(vec3(0.07999999821186065673828125 * clamp(mix(Material_PreshaderBuffer_18.x, Material_PreshaderBuffer_17.w, _180), 0.0, 1.0)), _294, vec3(_295));
    vec3 _70 = _294 - (_294 * _295);
    highp vec2 _767 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _772 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _767);
    highp vec4 _774 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _767 + vec2(0.0, 0.5));
    vec3 _309 = (_772.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _322 = dot(_309, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _321 = (exp2((_322 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_774 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_160.yzx, 1.0)));
    vec3 _397;
    float _398;
    if (false || (max(0.0, dot(_160, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)) == 0.0))
    {
        highp vec4 _790 = vec4(_160, 1.0);
        highp vec3 _794 = _532;
        _794.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _790);
        highp vec3 _798 = _794;
        _798.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _790);
        highp vec3 _802 = _798;
        _802.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _790);
        vec3 _323 = max(vec3(0.0), _802) * View_SkyLightColor.xyz;
        _398 = _321 + dot(_323, vec3(0.300048828125, 0.58984375, 0.1099853515625));
        _397 = _323;
    }
    else
    {
        _398 = _321;
        _397 = vec3(0.0);
    }
    highp vec4 _809 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _816 = clamp((_809 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _820 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _816) * _816;
    highp vec4 _837 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    highp float _841 = max(0.0, dot(_160, normalize(_566 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _339 = _70 * 0.318407952785491943359375;
    highp vec3 _842 = vec3(1.0) * max(0.0, dot(_160, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _340 = _761 * _761;
    highp float _846 = _841 * _340;
    highp float _848 = _340 / ((1.0 - (_841 * _841)) + (_846 * _846));
    float _345 = (_761 * 0.25) + 0.25;
    vec4 _355 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _761) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _356 = _355.x;
    vec2 _366 = (vec2(-1.0400390625, 1.0400390625) * ((min(_356 * _356, exp2((-9.28125) * clamp(abs(dot(_160, _566)) + 1.0013580322265625e-05, 0.0, 1.0))) * _356) + _355.y)) + _355.zw;
    highp vec3 _851 = (_301 * _366.x) + vec3(clamp(50.0 * _301.y, 0.0, 1.0) * _366.y);
    highp vec2 _860 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _887 = uvec2(uint(_860.x), uint(_860.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _399;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _399 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _630, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_761, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _399 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _630, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_761, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _933 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _887.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _887.x) * 2u;
    uvec4 _941 = texelFetch(ps1, int(_933 + 1u));
    uint _942 = _941.x;
    uint _955 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _956 = min(min(texelFetch(ps1, int(_933)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _958;
    _958 = (((((_309 * (_321 / max(9.9999997473787516355514526367188e-06, _322))) + _397) * _70) * vec3(_298)) + ((((_339 * _842) * 1.0) + ((_842 * (_851 * (min(_848 * _848, 2048.0) * _345))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * mix(1.0, dot(_820, _837), dot(_837, vec4(1.0)))))) + (((_399 * mix(1.0, min((_398 * _298) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_761 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _298) * _851);
    highp vec3 _959;
    SPIRV_CROSS_LOOP
    for (uint _961 = 0u; _961 < _956; _958 = _959, _961++)
    {
        uint _970 = texelFetch(ps2, int(_942 + _961)).x * 6u;
        highp vec4 _972 = texelFetch(ps0, int(_970));
        highp vec4 _974 = texelFetch(ps0, int(_970 + 1u));
        highp vec4 _976 = texelFetch(ps0, int(_970 + 2u));
        highp vec4 _978 = texelFetch(ps0, int(_970 + 3u));
        highp float _979 = _972.w;
        highp float _980 = _979 * _979;
        highp vec3 _981 = _972.xyz;
        highp vec3 _982 = in_var_TEXCOORD8.xyz - _981;
        if ((dot(_982, _982) * _980) > 1.0)
        {
            _959 = _958;
            continue;
        }
        uint _989 = floatBitsToUint(_976.w);
        if (((_989 >> 8u) & _955) == 0u)
        {
            _959 = _958;
            continue;
        }
        highp float _998 = _974.w;
        highp vec4 _1013 = vec4(float((_989 & 1u) != 0u), float((_989 & 2u) != 0u), float((_989 & 4u) != 0u), float((_989 & 8u) != 0u));
        highp vec3 _1014 = _981 - in_var_TEXCOORD8.xyz;
        highp float _1015 = dot(_1014, _1014);
        highp vec3 _1017 = _1014 * inversesqrt(_1015);
        highp float _1034;
        if (_998 == 0.0)
        {
            highp float _1026 = _1015 * _980;
            highp float _1029 = clamp(1.0 - (_1026 * _1026), 0.0, 1.0);
            _1034 = (_1029 * _1029) * (1.0 / (_1015 + 1.0));
        }
        else
        {
            highp vec3 _1021 = _1014 * _979;
            _1034 = pow(1.0 - clamp(dot(_1021, _1021), 0.0, 1.0), _998);
        }
        highp float _1045;
        if (((_989 >> 16u) & 3u) == 2u)
        {
            highp float _1042 = clamp((dot(_1017, _976.xyz) - _978.x) * _978.y, 0.0, 1.0);
            _1045 = _1034 * (_1042 * _1042);
        }
        else
        {
            _1045 = _1034;
        }
        highp vec3 _1067;
        SPIRV_CROSS_BRANCH
        if (_1045 > 0.0)
        {
            highp float _1053 = max(0.0, dot(_160, normalize(_566 + _1017)));
            highp vec3 _1054 = vec3(1.0) * max(0.0, dot(_160, _1017));
            highp float _1058 = _1053 * _340;
            highp float _1060 = _340 / ((1.0 - (_1053 * _1053)) + (_1058 * _1058));
            _1067 = (((_339 * _1054) * 1.0) + ((_1054 * (_851 * (min(_1060 * _1060, 2048.0) * _345))) * 1.0)) * ((_974.xyz * _1045) * mix(1.0, dot(_820, _1013), dot(_1013, vec4(1.0))));
        }
        else
        {
            _1067 = vec3(0.0);
        }
        _959 = _958 + _1067;
    }
    vec3 _79 = _958 * 1.0;
    vec4 _400 = vec4(_79.x, _79.y, _79.z, _533.w);
    _400.w = 0.0;
    highp vec3 _1071 = min((_400.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1071.x, _1071.y, _1071.z, _400.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

