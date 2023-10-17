// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSTLightMapPolicyLQHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,0:987-0:h:32:1,0:988-0:h:36:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(9:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(10:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(11:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(12:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(13:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(14:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(15:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(16:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(17:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[9])
#define View_bSubsurfacePostprocessEnabled (pc0_h[8].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps17
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[10];


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
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


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
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _511;
vec3 _512;

void main()
{
    highp vec3 _543;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _543 = -View_ViewForward;
    }
    else
    {
        _543 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _183 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _554 = vec4(_183, sqrt(clamp(1.0 - dot(_183, _183), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _91 = _554.z + 1.0;
    vec2 _190 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _565 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _568 = _565.x * Material_PreshaderBuffer_1.w;
    vec3 _95 = vec4(_190, sqrt(clamp(1.0 - dot(_190, _190), 0.0, 1.0)), 1.0).xyz * vec3(_568, _568, 1.0);
    vec3 _100 = vec3(_554.xy, _91);
    vec3 _104 = vec3(_95.xy * vec2(-1.0), _95.z);
    vec3 _110 = (_100 * vec3(dot(_100, _104))) - (vec3(_91) * _104);
    float _112 = _110.z + 1.0;
    vec2 _197 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _581 = mix(vec3(0.0, 0.0, 1.0), vec4(_197, sqrt(clamp(1.0 - dot(_197, _197), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _120 = vec3(_110.xy, _112);
    vec3 _124 = vec3(_581.xy * vec2(-1.0), _581.z);
    vec3 _130 = (_120 * vec3(dot(_120, _124))) - (vec3(_112) * _124);
    float _132 = _130.z + 1.0;
    highp vec4 _585 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _204 = (_585.xy * vec2(2.0)) - vec2(1.0);
    highp float _588 = sqrt(clamp(1.0 - dot(_204, _204), 0.0, 1.0));
    vec3 _137 = vec3(_130.xy, _132);
    vec3 _140 = vec3(vec4(_204, _588, 1.0).xy * vec2(-1.0), _588);
    vec3 _147 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_137 * vec3(dot(_137, _140))) - (vec3(_132) * _140))) * 1.0;
    highp vec3 _593 = (-_543) + ((_147 * dot(_147, _543)) * 2.0);
    highp vec4 _597 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _604 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _608 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _148 = _597.xyz;
    highp vec4 _615 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _621 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _159 = _621.x;
    vec3 _161 = mix(mix(_148, _604.xyz * (_148 / _608.xyz), vec3(0.669921875)), (_615.xyz * (_148 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_159));
    highp vec4 _628 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _213 = _628.x;
    float _214 = _628.y;
    float _211 = _628.z;
    vec3 _170 = _565.xyz;
    vec3 _172 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _219 = clamp(mix(_161, _161 * vec3((_213 <= 0.0) ? 0.0 : pow(_213, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125), (_211 <= 0.0) ? 0.0 : pow(_211, 0.300048828125)), vec3(_159 * clamp(1.0 - ((1.0 - _621.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _170, vec3(0.0), vec3(1.0));
    float _220 = clamp((_170 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_543, _172)) * _172) * vec3(2.0)) - _543, _543)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _650 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _159), 0.0, 1.0));
    vec3 _223 = dFdx(_147);
    vec3 _224 = dFdy(_147);
    highp float _656 = clamp(pow(max(dot(_223, _223), dot(_224, _224)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _228 = vec3(0.07999999821186065673828125 * _220);
    highp vec2 _659 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _664 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _659);
    highp vec4 _666 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _659 + vec2(0.0, 0.5));
    vec3 _235 = (_664.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _248 = dot(_235, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _247 = (exp2((_248 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_666 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_147.yzx, 1.0)));
    float _255 = mix(1.0, 0.0, dot(vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u)), vec4(1.0)));
    highp float _698 = max(0.0, dot(_147, normalize(_543 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _701 = uint(((vec4(_512.x, _512.y, _512.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _710 = (vec2(uvec2(5u, _701)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _712 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _710, 0.0);
    float _269 = _712.z;
    highp float _715 = max(clamp(_650 * (_712.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _273 = clamp(_650 * (_712.y * 2.0), 0.0, 1.0);
    float _259 = mix(_715, _273, _269);
    float _260 = dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _722 = float(_701);
    highp vec2 _731 = (vec2(uvec2(0u, _701)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _734 = vec3(1.0) * max(0.0, dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _276 = _219 * 0.318407952785491943359375;
    highp float _739 = 1.0 - (_698 * _698);
    float _277 = _715 * _715;
    highp float _740 = _698 * _277;
    highp float _742 = _277 / (_739 + (_740 * _740));
    float _281 = _273 * _273;
    highp float _743 = _698 * _281;
    highp float _745 = _281 / (_739 + (_743 * _743));
    vec4 _295 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _259) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _296 = _295.x;
    float _299 = exp2((-9.28125) * clamp(abs(dot(_147, _543)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _306 = (vec2(-1.0400390625, 1.0400390625) * ((min(_296 * _296, _299) * _296) + _295.y)) + _295.zw;
    float _290 = clamp(_220 * 4.0, 0.0, 1.0);
    highp vec2 _758 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _785 = uvec2(uint(_758.x), uint(_758.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _385;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _385 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _593, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_650, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _385 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _593, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_650, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _330 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _650) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _331 = _330.x;
    vec2 _339 = (vec2(-1.0400390625, 1.0400390625) * ((min(_331 * _331, _299) * _331) + _330.y)) + _330.zw;
    highp vec3 _834 = (((_235 * (_247 / max(9.9999997473787516355514526367188e-06, _248))) * _219) + ((((mix(_734 * _255, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_260 - (max(2.0 * _260, 0.4000000059604644775390625) * (1.0 - sqrt(_255))), -1.0) * 0.5) + 0.5, _656, _722), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _731, 0.0).xyz) * _276) * 1.0) + ((_734 * (((_228 * _306.x) + vec3(_290 * _306.y)) * (mix(min(_742 * _742, 2048.0), min(_745 * _745, 2048.0), _269) * ((_259 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _255))) + (((_385 * mix(1.0, min(_247 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_650 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_228 * _339.x) + vec3(_290 * _339.y)));
    uint _835 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _785.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _785.x) * 2u;
    uvec4 _843 = texelFetch(ps1, int(_835 + 1u));
    uint _844 = _843.x;
    uint _859 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _860 = min(min(texelFetch(ps1, int(_835)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _862;
    _862 = _834;
    highp vec3 _863;
    SPIRV_CROSS_LOOP
    for (uint _865 = 0u; _865 < _860; _862 = _863, _865++)
    {
        uint _874 = texelFetch(ps2, int(_844 + _865)).x * 6u;
        highp vec4 _876 = texelFetch(ps0, int(_874));
        highp vec4 _878 = texelFetch(ps0, int(_874 + 1u));
        highp vec4 _880 = texelFetch(ps0, int(_874 + 2u));
        highp vec4 _882 = texelFetch(ps0, int(_874 + 3u));
        highp float _883 = _876.w;
        highp float _884 = _883 * _883;
        highp vec3 _885 = _876.xyz;
        highp vec3 _886 = in_var_TEXCOORD8.xyz - _885;
        if ((dot(_886, _886) * _884) > 1.0)
        {
            _863 = _862;
            continue;
        }
        uint _893 = floatBitsToUint(_880.w);
        if (((_893 >> 8u) & _859) == 0u)
        {
            _863 = _862;
            continue;
        }
        highp float _902 = _878.w;
        highp vec3 _918 = _885 - in_var_TEXCOORD8.xyz;
        highp float _919 = dot(_918, _918);
        highp vec3 _921 = _918 * inversesqrt(_919);
        highp float _938;
        if (_902 == 0.0)
        {
            highp float _930 = _919 * _884;
            highp float _933 = clamp(1.0 - (_930 * _930), 0.0, 1.0);
            _938 = (_933 * _933) * (1.0 / (_919 + 1.0));
        }
        else
        {
            highp vec3 _925 = _918 * _883;
            _938 = pow(1.0 - clamp(dot(_925, _925), 0.0, 1.0), _902);
        }
        highp float _949;
        if (((_893 >> 16u) & 3u) == 2u)
        {
            highp float _946 = clamp((dot(_921, _880.xyz) - _882.x) * _882.y, 0.0, 1.0);
            _949 = _938 * (_946 * _946);
        }
        else
        {
            _949 = _938;
        }
        highp vec3 _996;
        SPIRV_CROSS_BRANCH
        if (_949 > 0.0)
        {
            float _342 = mix(1.0, 0.0, dot(vec4(float((_893 & 1u) != 0u), float((_893 & 2u) != 0u), float((_893 & 4u) != 0u), float((_893 & 8u) != 0u)), vec4(1.0)));
            highp float _957 = max(0.0, dot(_147, normalize(_543 + _921)));
            highp vec4 _959 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _710, 0.0);
            float _352 = _959.z;
            highp float _962 = max(clamp(_650 * (_959.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _356 = clamp(_650 * (_959.y * 2.0), 0.0, 1.0);
            float _343 = mix(_962, _356, _352);
            float _344 = dot(_147, _921);
            highp vec3 _974 = vec3(1.0) * max(0.0, dot(_147, _921));
            highp float _979 = 1.0 - (_957 * _957);
            float _359 = _962 * _962;
            highp float _980 = _957 * _359;
            highp float _982 = _359 / (_979 + (_980 * _980));
            float _363 = _356 * _356;
            highp float _983 = _957 * _363;
            highp float _985 = _363 / (_979 + (_983 * _983));
            vec4 _375 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _343) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _376 = _375.x;
            vec2 _384 = (vec2(-1.0400390625, 1.0400390625) * ((min(_376 * _376, _299) * _376) + _375.y)) + _375.zw;
            _996 = (((mix(_974 * _342, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_344 - (max(2.0 * _344, 0.4000000059604644775390625) * (1.0 - sqrt(_342))), -1.0) * 0.5) + 0.5, _656, _722), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _731, 0.0).xyz) * _276) * 1.0) + ((_974 * (((_228 * _384.x) + vec3(_290 * _384.y)) * (mix(min(_982 * _982, 2048.0), min(_985 * _985, 2048.0), _352) * ((_343 * 0.25) + 0.25)))) * 1.0)) * ((_878.xyz * _949) * _342);
        }
        else
        {
            _996 = vec3(0.0);
        }
        _863 = _862 + _996;
    }
    vec3 _75 = _862 * 1.0;
    vec4 _386 = vec4(_75.x, _75.y, _75.z, _511.w);
    _386.w = 0.0;
    highp vec3 _1000 = min((_386.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1000.x, _1000.y, _1000.z, _386.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

