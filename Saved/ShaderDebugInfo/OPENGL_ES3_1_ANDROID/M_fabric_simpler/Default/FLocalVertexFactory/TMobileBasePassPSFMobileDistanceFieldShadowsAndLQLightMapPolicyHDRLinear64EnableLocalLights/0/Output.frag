// ! M_fabric_simpler/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsAndLQLightMapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_CullingSign(571,1),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_18(72,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:571-0:h:20:1,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:16-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:40-6:h:24:4,6:44-6:h:28:4,6:52-6:h:32:4,6:56-6:h:36:4,6:60-6:h:40:4,6:64-6:h:44:4,6:68-6:h:48:4,6:72-6:h:52:4
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

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
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
uniform highp vec4 pc0_h[8];


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

vec4 _521;

void main()
{
    highp vec3 _554;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _554 = -View_ViewForward;
    }
    else
    {
        _554 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _251 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _573 = mix(vec3(0.0, 0.0, 1.0), vec4(_251, sqrt(clamp(1.0 - dot(_251, _251), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_0.x));
    float _90 = _573.z + 1.0;
    highp vec4 _581 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _91 = _581.x;
    vec3 _92 = vec3(_91);
    vec3 _93 = mix(vec3(0.0, 0.0, 1.0), mix(vec3(0.0, 0.0, 1.0), _573, vec3(Material_PreshaderBuffer_0.y)), _92);
    vec3 _98 = vec3(_573.xy, _90);
    vec3 _102 = vec3(_93.xy * vec2(-1.0), _93.z);
    vec3 _108 = (_98 * vec3(dot(_98, _102))) - (vec3(_90) * _102);
    float _110 = _108.z + 1.0;
    vec2 _115 = vec2(in_var_TEXCOORD0[0].x * Material_PreshaderBuffer_0.z, in_var_TEXCOORD0[0].y * Material_PreshaderBuffer_0.w) * vec2(Material_PreshaderBuffer_1.x);
    vec2 _258 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, _115).xy * vec2(2.0)) - vec2(1.0);
    vec3 _117 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_258, sqrt(clamp(1.0 - dot(_258, _258), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.y)), vec3(0.0, 0.0, 1.0), _92);
    float _119 = _117.z + 1.0;
    vec2 _265 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.z)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _123 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_265, sqrt(clamp(1.0 - dot(_265, _265), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.w)), vec3(0.0, 0.0, 1.0), _92);
    vec3 _128 = vec3(_117.xy, _119);
    vec3 _132 = vec3(_123.xy * vec2(-1.0), _123.z);
    vec3 _138 = (_128 * vec3(dot(_128, _132))) - (vec3(_119) * _132);
    vec3 _143 = vec3(_108.xy, _110);
    vec3 _147 = vec3(_138.xy * vec2(-1.0), _138.z);
    vec3 _154 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_143 * vec3(dot(_143, _147))) - (vec3(_110) * _147))) * ((View_CullingSign * (((Primitive_Flags & 64u) != 0u) ? (-1.0) : 1.0)) * float(gl_FrontFacing ? (-1) : 1));
    highp float _615 = dot(_154, _554);
    highp vec3 _618 = (-_554) + ((_154 * _615) * 2.0);
    highp vec4 _634 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, (in_var_TEXCOORD0[0].zw * vec2(Material_PreshaderBuffer_4.x)) + Material_PreshaderBuffer_5.xy);
    float _162 = _634.x;
    float _164 = _634.y;
    float _167 = _634.z;
    highp vec3 _658 = vec3(_91);
    highp vec3 _659 = mix(mix(Material_PreshaderBuffer_11.xyz, ((Material_PreshaderBuffer_6.xyz * vec3(_162)) + (Material_PreshaderBuffer_8.xyz * vec3(_164))) + (Material_PreshaderBuffer_10.xyz * vec3(_167)), vec3(((_162 + _164) + _167) * Material_PreshaderBuffer_10.w)), Material_PreshaderBuffer_13.xyz, _658);
    vec3 _172 = ((texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _115).xyz + vec3(0.00010001659393310546875)) / (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _115, 14.0).xyz + vec3(0.00010001659393310546875))) * _659;
    highp vec3 _663 = mix(_172, _659, vec3(Material_PreshaderBuffer_13.w));
    highp vec3 _667 = mix(_663, _172 * _663, vec3(Material_PreshaderBuffer_14.x));
    highp vec4 _671 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, _115);
    float _174 = _671.x;
    highp float _674 = mix(0.5, _174, Material_PreshaderBuffer_14.y);
    highp float _683 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_14.z)).x, Material_PreshaderBuffer_14.w);
    float _186 = (_674 >= 0.5) ? (1.0 - (((1.0 - _674) * 2.0) * (1.0 - _683))) : ((_674 * 2.0) * _683);
    vec3 _187 = vec3(_186);
    highp float _690 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).x, Material_PreshaderBuffer_15.x);
    vec3 _194 = vec3(1.0) - (((vec3(1.0) - _187) * vec3(2.0)) * vec3(1.0 - _690));
    vec3 _197 = (_187 * vec3(2.0)) * vec3(_690);
    bool _198 = _186 >= 0.5;
    float _201 = _198 ? _194.x : _197.x;
    float _208 = _201 * 2.0;
    highp float _696 = mix(mix(Material_PreshaderBuffer_15.y, 1.0, clamp(_208, 0.0, 1.0)), Material_PreshaderBuffer_15.z, clamp(_208 - 1.0, 0.0, 1.0));
    float _274 = _667.x;
    highp float _698 = (_274 <= 0.0) ? 0.0 : pow(_274, _696);
    float _275 = _667.y;
    highp float _700 = (_275 <= 0.0) ? 0.0 : pow(_275, _696);
    float _272 = _667.z;
    highp float _702 = (_272 <= 0.0) ? 0.0 : pow(_272, _696);
    vec3 _273 = vec3(_698, _700, _702);
    highp vec3 _706 = mix(vec3(0.5), vec3(_201, _198 ? _194.y : _197.y, _198 ? _194.z : _197.z), vec3(Material_PreshaderBuffer_15.w));
    vec3 _217 = vec3(1.0) - (((vec3(1.0) - _273) * vec3(2.0)) * (vec3(1.0) - _706));
    vec3 _219 = (_273 * vec3(2.0)) * _706;
    highp vec3 _707 = mix(vec3((_698 >= 0.5) ? _217.x : _219.x, (_700 >= 0.5) ? _217.y : _219.y, (_702 >= 0.5) ? _217.z : _219.z), Material_PreshaderBuffer_13.xyz, _658);
    vec3 _237 = mix(max(_707, mix(vec3(0.0), texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_16.x)).xxx * _659, vec3(Material_PreshaderBuffer_16.y))), _707, _92);
    float _282 = _237.x;
    float _283 = _237.y;
    float _280 = _237.z;
    float _241 = max(abs(1.0 - max(0.0, _615)), 0.00010001659393310546875);
    highp vec4 _743 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _288 = clamp(mix(_237, vec3((_282 <= 0.0) ? 0.0 : pow(_282, Material_PreshaderBuffer_16.z), (_283 <= 0.0) ? 0.0 : pow(_283, Material_PreshaderBuffer_16.z), (_280 <= 0.0) ? 0.0 : pow(_280, Material_PreshaderBuffer_16.z)), vec3(mix(Material_PreshaderBuffer_17.x, Material_PreshaderBuffer_16.w, _91) * ((((_241 <= 0.0) ? 0.0 : pow(_241, Material_PreshaderBuffer_17.y)) * 0.9599609375) + 0.040008544921875))), vec3(0.0), vec3(1.0));
    float _289 = clamp(Material_PreshaderBuffer_17.z, 0.0, 1.0);
    highp float _749 = max(0.015625, clamp(Material_PreshaderBuffer_18.y * _743.y, 0.0, 1.0));
    float _292 = clamp(_743.x, 0.0, 1.0);
    vec3 _295 = mix(vec3(0.07999999821186065673828125 * clamp(mix(Material_PreshaderBuffer_18.x, Material_PreshaderBuffer_17.w, _174), 0.0, 1.0)), _288, vec3(_289));
    vec3 _69 = _288 - (_288 * _289);
    highp vec2 _752 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _757 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _752);
    highp vec4 _759 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _752 + vec2(0.0, 0.5));
    vec3 _302 = (_757.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _315 = dot(_302, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _314 = (exp2((_315 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_759 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_154.yzx, 1.0)));
    highp vec4 _775 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _782 = clamp((_775 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _786 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _782) * _782;
    highp vec4 _804 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    highp float _808 = max(0.0, dot(_154, normalize(_554 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _331 = _69 * 0.318407952785491943359375;
    highp vec3 _809 = vec3(1.0) * max(0.0, dot(_154, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _332 = _749 * _749;
    highp float _813 = _808 * _332;
    highp float _815 = _332 / ((1.0 - (_808 * _808)) + (_813 * _813));
    float _337 = (_749 * 0.25) + 0.25;
    vec4 _347 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _749) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _348 = _347.x;
    vec2 _358 = (vec2(-1.0400390625, 1.0400390625) * ((min(_348 * _348, exp2((-9.28125) * clamp(abs(dot(_154, _554)) + 1.0013580322265625e-05, 0.0, 1.0))) * _348) + _347.y)) + _347.zw;
    highp vec3 _818 = (_295 * _358.x) + vec3(clamp(50.0 * _295.y, 0.0, 1.0) * _358.y);
    highp vec2 _827 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _854 = uvec2(uint(_827.x), uint(_827.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _389;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _389 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _618, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_749, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _389 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _618, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_749, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _901 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _854.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _854.x) * 2u;
    uvec4 _909 = texelFetch(ps1, int(_901 + 1u));
    uint _910 = _909.x;
    uint _923 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _924 = min(min(texelFetch(ps1, int(_901)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _926;
    _926 = ((((_302 * (_314 / max(9.9999997473787516355514526367188e-06, _315))) * _69) * vec3(_292)) + ((((_331 * _809) * 1.0) + ((_809 * (_818 * (min(_815 * _815, 2048.0) * _337))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * mix(1.0, dot(_786, _804), dot(_804, vec4(1.0)))))) + (((_389 * mix(1.0, min((_314 * _292) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_749 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _292) * _818);
    highp vec3 _927;
    SPIRV_CROSS_LOOP
    for (uint _929 = 0u; _929 < _924; _926 = _927, _929++)
    {
        uint _938 = texelFetch(ps2, int(_910 + _929)).x * 6u;
        highp vec4 _940 = texelFetch(ps0, int(_938));
        highp vec4 _942 = texelFetch(ps0, int(_938 + 1u));
        highp vec4 _944 = texelFetch(ps0, int(_938 + 2u));
        highp vec4 _946 = texelFetch(ps0, int(_938 + 3u));
        highp float _947 = _940.w;
        highp float _948 = _947 * _947;
        highp vec3 _949 = _940.xyz;
        highp vec3 _950 = in_var_TEXCOORD8.xyz - _949;
        if ((dot(_950, _950) * _948) > 1.0)
        {
            _927 = _926;
            continue;
        }
        uint _957 = floatBitsToUint(_944.w);
        if (((_957 >> 8u) & _923) == 0u)
        {
            _927 = _926;
            continue;
        }
        highp float _966 = _942.w;
        highp vec4 _981 = vec4(float((_957 & 1u) != 0u), float((_957 & 2u) != 0u), float((_957 & 4u) != 0u), float((_957 & 8u) != 0u));
        highp vec3 _982 = _949 - in_var_TEXCOORD8.xyz;
        highp float _983 = dot(_982, _982);
        highp vec3 _985 = _982 * inversesqrt(_983);
        highp float _1002;
        if (_966 == 0.0)
        {
            highp float _994 = _983 * _948;
            highp float _997 = clamp(1.0 - (_994 * _994), 0.0, 1.0);
            _1002 = (_997 * _997) * (1.0 / (_983 + 1.0));
        }
        else
        {
            highp vec3 _989 = _982 * _947;
            _1002 = pow(1.0 - clamp(dot(_989, _989), 0.0, 1.0), _966);
        }
        highp float _1013;
        if (((_957 >> 16u) & 3u) == 2u)
        {
            highp float _1010 = clamp((dot(_985, _944.xyz) - _946.x) * _946.y, 0.0, 1.0);
            _1013 = _1002 * (_1010 * _1010);
        }
        else
        {
            _1013 = _1002;
        }
        highp vec3 _1035;
        SPIRV_CROSS_BRANCH
        if (_1013 > 0.0)
        {
            highp float _1021 = max(0.0, dot(_154, normalize(_554 + _985)));
            highp vec3 _1022 = vec3(1.0) * max(0.0, dot(_154, _985));
            highp float _1026 = _1021 * _332;
            highp float _1028 = _332 / ((1.0 - (_1021 * _1021)) + (_1026 * _1026));
            _1035 = (((_331 * _1022) * 1.0) + ((_1022 * (_818 * (min(_1028 * _1028, 2048.0) * _337))) * 1.0)) * ((_942.xyz * _1013) * mix(1.0, dot(_786, _981), dot(_981, vec4(1.0))));
        }
        else
        {
            _1035 = vec3(0.0);
        }
        _927 = _926 + _1035;
    }
    vec3 _73 = _926 * 1.0;
    vec4 _390 = vec4(_73.x, _73.y, _73.z, _521.w);
    _390.w = 0.0;
    highp vec3 _1039 = min((_390.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1039.x, _1039.y, _1039.z, _390.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

