// ! M_fabric_simpler/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndLightMapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_CullingSign(571,1),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_18(72,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:571-0:h:24:1,0:748-0:h:28:4,0:752-0:h:32:32,0:786-0:m:8:1,0:792-0:h:64:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:16-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:40-6:h:24:4,6:44-6:h:28:4,6:52-6:h:32:4,6:56-6:h:36:4,6:60-6:h:40:4,6:64-6:h:44:4,6:68-6:h:48:4,6:72-6:h:52:4
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

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[16].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[8 + int(Offset)])
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
uniform highp vec4 pc0_h[17];


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

vec3 _547;
vec4 _548;

void main()
{
    highp float _556 = 1.0 / gl_FragCoord.w;
    highp vec2 _576 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _585 = vec4(((_576 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _556;
    highp vec3 _594;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _594 = -View_ViewForward;
    }
    else
    {
        _594 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _258 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _613 = mix(vec3(0.0, 0.0, 1.0), vec4(_258, sqrt(clamp(1.0 - dot(_258, _258), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_0.x));
    float _97 = _613.z + 1.0;
    highp vec4 _621 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _98 = _621.x;
    vec3 _99 = vec3(_98);
    vec3 _100 = mix(vec3(0.0, 0.0, 1.0), mix(vec3(0.0, 0.0, 1.0), _613, vec3(Material_PreshaderBuffer_0.y)), _99);
    vec3 _105 = vec3(_613.xy, _97);
    vec3 _109 = vec3(_100.xy * vec2(-1.0), _100.z);
    vec3 _115 = (_105 * vec3(dot(_105, _109))) - (vec3(_97) * _109);
    float _117 = _115.z + 1.0;
    vec2 _122 = vec2(in_var_TEXCOORD0[0].x * Material_PreshaderBuffer_0.z, in_var_TEXCOORD0[0].y * Material_PreshaderBuffer_0.w) * vec2(Material_PreshaderBuffer_1.x);
    vec2 _265 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, _122).xy * vec2(2.0)) - vec2(1.0);
    vec3 _124 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_265, sqrt(clamp(1.0 - dot(_265, _265), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.y)), vec3(0.0, 0.0, 1.0), _99);
    float _126 = _124.z + 1.0;
    vec2 _272 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.z)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _130 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_272, sqrt(clamp(1.0 - dot(_272, _272), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.w)), vec3(0.0, 0.0, 1.0), _99);
    vec3 _135 = vec3(_124.xy, _126);
    vec3 _139 = vec3(_130.xy * vec2(-1.0), _130.z);
    vec3 _145 = (_135 * vec3(dot(_135, _139))) - (vec3(_126) * _139);
    vec3 _150 = vec3(_115.xy, _117);
    vec3 _154 = vec3(_145.xy * vec2(-1.0), _145.z);
    vec3 _161 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_150 * vec3(dot(_150, _154))) - (vec3(_117) * _154))) * ((View_CullingSign * (((Primitive_Flags & 64u) != 0u) ? (-1.0) : 1.0)) * float(gl_FrontFacing ? (-1) : 1));
    highp float _655 = dot(_161, _594);
    highp vec3 _658 = (-_594) + ((_161 * _655) * 2.0);
    highp vec4 _674 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, (in_var_TEXCOORD0[0].zw * vec2(Material_PreshaderBuffer_4.x)) + Material_PreshaderBuffer_5.xy);
    float _169 = _674.x;
    float _171 = _674.y;
    float _174 = _674.z;
    highp vec3 _698 = vec3(_98);
    highp vec3 _699 = mix(mix(Material_PreshaderBuffer_11.xyz, ((Material_PreshaderBuffer_6.xyz * vec3(_169)) + (Material_PreshaderBuffer_8.xyz * vec3(_171))) + (Material_PreshaderBuffer_10.xyz * vec3(_174)), vec3(((_169 + _171) + _174) * Material_PreshaderBuffer_10.w)), Material_PreshaderBuffer_13.xyz, _698);
    vec3 _179 = ((texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _122).xyz + vec3(0.00010001659393310546875)) / (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _122, 14.0).xyz + vec3(0.00010001659393310546875))) * _699;
    highp vec3 _703 = mix(_179, _699, vec3(Material_PreshaderBuffer_13.w));
    highp vec3 _707 = mix(_703, _179 * _703, vec3(Material_PreshaderBuffer_14.x));
    highp vec4 _711 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, _122);
    float _181 = _711.x;
    highp float _714 = mix(0.5, _181, Material_PreshaderBuffer_14.y);
    highp float _723 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_14.z)).x, Material_PreshaderBuffer_14.w);
    float _193 = (_714 >= 0.5) ? (1.0 - (((1.0 - _714) * 2.0) * (1.0 - _723))) : ((_714 * 2.0) * _723);
    vec3 _194 = vec3(_193);
    highp float _730 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).x, Material_PreshaderBuffer_15.x);
    vec3 _201 = vec3(1.0) - (((vec3(1.0) - _194) * vec3(2.0)) * vec3(1.0 - _730));
    vec3 _204 = (_194 * vec3(2.0)) * vec3(_730);
    bool _205 = _193 >= 0.5;
    float _208 = _205 ? _201.x : _204.x;
    float _215 = _208 * 2.0;
    highp float _736 = mix(mix(Material_PreshaderBuffer_15.y, 1.0, clamp(_215, 0.0, 1.0)), Material_PreshaderBuffer_15.z, clamp(_215 - 1.0, 0.0, 1.0));
    float _281 = _707.x;
    highp float _738 = (_281 <= 0.0) ? 0.0 : pow(_281, _736);
    float _282 = _707.y;
    highp float _740 = (_282 <= 0.0) ? 0.0 : pow(_282, _736);
    float _279 = _707.z;
    highp float _742 = (_279 <= 0.0) ? 0.0 : pow(_279, _736);
    vec3 _280 = vec3(_738, _740, _742);
    highp vec3 _746 = mix(vec3(0.5), vec3(_208, _205 ? _201.y : _204.y, _205 ? _201.z : _204.z), vec3(Material_PreshaderBuffer_15.w));
    vec3 _224 = vec3(1.0) - (((vec3(1.0) - _280) * vec3(2.0)) * (vec3(1.0) - _746));
    vec3 _226 = (_280 * vec3(2.0)) * _746;
    highp vec3 _747 = mix(vec3((_738 >= 0.5) ? _224.x : _226.x, (_740 >= 0.5) ? _224.y : _226.y, (_742 >= 0.5) ? _224.z : _226.z), Material_PreshaderBuffer_13.xyz, _698);
    vec3 _244 = mix(max(_747, mix(vec3(0.0), texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_16.x)).xxx * _699, vec3(Material_PreshaderBuffer_16.y))), _747, _99);
    float _289 = _244.x;
    float _290 = _244.y;
    float _287 = _244.z;
    float _248 = max(abs(1.0 - max(0.0, _655)), 0.00010001659393310546875);
    highp vec4 _783 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _295 = clamp(mix(_244, vec3((_289 <= 0.0) ? 0.0 : pow(_289, Material_PreshaderBuffer_16.z), (_290 <= 0.0) ? 0.0 : pow(_290, Material_PreshaderBuffer_16.z), (_287 <= 0.0) ? 0.0 : pow(_287, Material_PreshaderBuffer_16.z)), vec3(mix(Material_PreshaderBuffer_17.x, Material_PreshaderBuffer_16.w, _98) * ((((_248 <= 0.0) ? 0.0 : pow(_248, Material_PreshaderBuffer_17.y)) * 0.9599609375) + 0.040008544921875))), vec3(0.0), vec3(1.0));
    float _296 = clamp(Material_PreshaderBuffer_17.z, 0.0, 1.0);
    highp float _789 = max(0.015625, clamp(Material_PreshaderBuffer_18.y * _783.y, 0.0, 1.0));
    float _299 = clamp(_783.x, 0.0, 1.0);
    vec3 _302 = mix(vec3(0.07999999821186065673828125 * clamp(mix(Material_PreshaderBuffer_18.x, Material_PreshaderBuffer_17.w, _181), 0.0, 1.0)), _295, vec3(_296));
    vec3 _71 = _295 - (_295 * _296);
    highp vec2 _795 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _800 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _795);
    highp vec4 _802 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _795 + vec2(0.0, 0.5));
    vec3 _310 = (_800.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _323 = dot(_310, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _322 = (exp2((_323 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_802 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_161.yzx, 1.0)));
    vec3 _402;
    float _403;
    if (false || (max(0.0, dot(_161, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)) == 0.0))
    {
        highp vec4 _818 = vec4(_161, 1.0);
        highp vec3 _822 = _547;
        _822.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _818);
        highp vec3 _826 = _822;
        _826.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _818);
        highp vec3 _830 = _826;
        _830.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _818);
        vec3 _324 = max(vec3(0.0), _830) * View_SkyLightColor.xyz;
        _403 = _322 + dot(_324, vec3(0.300048828125, 0.58984375, 0.1099853515625));
        _402 = _324;
    }
    else
    {
        _403 = _322;
        _402 = vec3(0.0);
    }
    highp float _833 = _585.w;
    highp vec4 _856;
    int _839 = 0;
    for (;;)
    {
        if (_839 < 4)
        {
            if (_833 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_839)])
            {
                _856 = MobileDirectionalLight_DirectionalLightScreenToShadow(_839) * vec4(_585.xy, _833, 1.0);
                break;
            }
            _839++;
            continue;
        }
        else
        {
            _856 = vec4(0.0);
            break;
        }
    }
    float _404;
    if (_856.z > 0.0)
    {
        highp vec2 _866 = (_856.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _867 = fract(_866);
        highp vec2 _871 = (floor(_866) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _877 = vec4((min(1.0 - _856.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _879 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _871, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _877, vec4(0.0), vec4(1.0));
        highp vec4 _884 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _871, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _877, vec4(0.0), vec4(1.0));
        highp vec4 _889 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _871, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _877, vec4(0.0), vec4(1.0));
        highp vec4 _894 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _871, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _877, vec4(0.0), vec4(1.0));
        highp float _896 = _867.x;
        highp float _897 = 1.0 - _896;
        highp vec4 _924 = _548;
        _924.x = (((_879.w * _897) + _879.z) + _884.w) + (_884.z * _896);
        highp vec4 _928 = _924;
        _928.y = (((_879.x * _897) + _879.y) + _884.x) + (_884.y * _896);
        highp vec4 _932 = _928;
        _932.z = (((_889.w * _897) + _889.z) + _894.w) + (_894.z * _896);
        highp vec4 _936 = _932;
        _936.w = (((_889.x * _897) + _889.y) + _894.x) + (_894.y * _896);
        highp float _937 = _867.y;
        highp float _946 = clamp((_833 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _404 = mix(dot(_936, vec4(1.0 - _937, 1.0, 1.0, _937) * 0.111111111938953399658203125), 1.0, _946 * _946);
    }
    else
    {
        _404 = 1.0;
    }
    highp float _969 = max(0.0, dot(_161, normalize(_594 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _345 = _71 * 0.318407952785491943359375;
    highp vec3 _970 = vec3(1.0) * max(0.0, dot(_161, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _346 = _789 * _789;
    highp float _974 = _969 * _346;
    highp float _976 = _346 / ((1.0 - (_969 * _969)) + (_974 * _974));
    float _351 = (_789 * 0.25) + 0.25;
    vec4 _361 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _789) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _362 = _361.x;
    vec2 _372 = (vec2(-1.0400390625, 1.0400390625) * ((min(_362 * _362, exp2((-9.28125) * clamp(abs(dot(_161, _594)) + 1.0013580322265625e-05, 0.0, 1.0))) * _362) + _361.y)) + _361.zw;
    highp vec3 _979 = (_302 * _372.x) + vec3(clamp(50.0 * _302.y, 0.0, 1.0) * _372.y);
    uvec2 _1013 = uvec2(uint(_576.x), uint(_576.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _405;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _405 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _658, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_789, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _405 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _658, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_789, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _1059 = ((((min(uint(max(0.0, log2((_556 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _1013.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _1013.x) * 2u;
    uvec4 _1067 = texelFetch(ps1, int(_1059 + 1u));
    uint _1068 = _1067.x;
    uint _1081 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1082 = min(min(texelFetch(ps1, int(_1059)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1084;
    _1084 = (((((_310 * (_322 / max(9.9999997473787516355514526367188e-06, _323))) + _402) * _71) * vec3(_299)) + ((((_345 * _970) * 1.0) + ((_970 * (_979 * (min(_976 * _976, 2048.0) * _351))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * (_404 * mix(1.0, 0.0, dot(vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u)), vec4(1.0))))))) + (((_405 * mix(1.0, min((_403 * _299) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_789 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _299) * _979);
    highp vec3 _1085;
    SPIRV_CROSS_LOOP
    for (uint _1087 = 0u; _1087 < _1082; _1084 = _1085, _1087++)
    {
        uint _1096 = texelFetch(ps2, int(_1068 + _1087)).x * 6u;
        highp vec4 _1098 = texelFetch(ps0, int(_1096));
        highp vec4 _1100 = texelFetch(ps0, int(_1096 + 1u));
        highp vec4 _1102 = texelFetch(ps0, int(_1096 + 2u));
        highp vec4 _1104 = texelFetch(ps0, int(_1096 + 3u));
        highp float _1105 = _1098.w;
        highp float _1106 = _1105 * _1105;
        highp vec3 _1107 = _1098.xyz;
        highp vec3 _1108 = in_var_TEXCOORD8.xyz - _1107;
        if ((dot(_1108, _1108) * _1106) > 1.0)
        {
            _1085 = _1084;
            continue;
        }
        uint _1115 = floatBitsToUint(_1102.w);
        if (((_1115 >> 8u) & _1081) == 0u)
        {
            _1085 = _1084;
            continue;
        }
        highp float _1124 = _1100.w;
        highp vec3 _1140 = _1107 - in_var_TEXCOORD8.xyz;
        highp float _1141 = dot(_1140, _1140);
        highp vec3 _1143 = _1140 * inversesqrt(_1141);
        highp float _1160;
        if (_1124 == 0.0)
        {
            highp float _1152 = _1141 * _1106;
            highp float _1155 = clamp(1.0 - (_1152 * _1152), 0.0, 1.0);
            _1160 = (_1155 * _1155) * (1.0 / (_1141 + 1.0));
        }
        else
        {
            highp vec3 _1147 = _1140 * _1105;
            _1160 = pow(1.0 - clamp(dot(_1147, _1147), 0.0, 1.0), _1124);
        }
        highp float _1171;
        if (((_1115 >> 16u) & 3u) == 2u)
        {
            highp float _1168 = clamp((dot(_1143, _1102.xyz) - _1104.x) * _1104.y, 0.0, 1.0);
            _1171 = _1160 * (_1168 * _1168);
        }
        else
        {
            _1171 = _1160;
        }
        highp vec3 _1193;
        SPIRV_CROSS_BRANCH
        if (_1171 > 0.0)
        {
            highp float _1179 = max(0.0, dot(_161, normalize(_594 + _1143)));
            highp vec3 _1180 = vec3(1.0) * max(0.0, dot(_161, _1143));
            highp float _1184 = _1179 * _346;
            highp float _1186 = _346 / ((1.0 - (_1179 * _1179)) + (_1184 * _1184));
            _1193 = (((_345 * _1180) * 1.0) + ((_1180 * (_979 * (min(_1186 * _1186, 2048.0) * _351))) * 1.0)) * ((_1100.xyz * _1171) * mix(1.0, 0.0, dot(vec4(float((_1115 & 1u) != 0u), float((_1115 & 2u) != 0u), float((_1115 & 4u) != 0u), float((_1115 & 8u) != 0u)), vec4(1.0))));
        }
        else
        {
            _1193 = vec3(0.0);
        }
        _1085 = _1084 + _1193;
    }
    vec3 _79 = _1084 * 1.0;
    vec4 _406 = vec4(_79.x, _79.y, _79.z, _548.w);
    _406.w = 0.0;
    highp vec3 _1196 = min((_406.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1196.x, _1196.y, _1196.z, _406.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

